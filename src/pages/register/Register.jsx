import { useState, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { app, db } from "../../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {
  serverTimestamp,
  doc,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Input from "../../components/shared/Input";
import { LoadingIcon } from "../../components/shared/Loading";
import google from "../../assets/icons/Google.svg";
import errorHandler from "../../utils/errorHandler";

const Register = () => {
  //

  const [registerData, setRegisterData] = useState({
    name: null,
    email: null,
    pwd: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const [registerError, setRegisterError] = useState(null);

  const { state, dispatch } = useContext(GlobalContext);

  const navigate = useNavigate();

  const auth = getAuth(app);

  // Add New user to DB

  const addUserToDb = async (uid, credentials) => {
    try {
      const docRef = await setDoc(doc(db, "users", uid), {
        createdAt: serverTimestamp(),
        name: credentials.name,
        email: credentials.email,
        pwd: credentials.pwd,
        // imgUrl: credentials?.imgUrl,
      });

      // Coll

      const colRef = await addDoc(collection(db, `users/${uid}/invoices`), {
        createdAt: serverTimestamp(),
        invoice: "hey hh",
      });
      console.log(docRef);
      console.log(colRef);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Register

  const handleSignUp = async (e) => {
    //

    e.preventDefault();

    setRegisterError(null);

    setIsLoading(true);

    try {
      // User Auth

      const signReq = await createUserWithEmailAndPassword(
        auth,
        registerData.email,
        registerData.pwd
      );

      const userCredential = signReq.user;

      // set current User

      dispatch({
        type: "REGISTER",
        payload: { email: userCredential.email, id: userCredential.uid },
      });

      // Redirect to Dashboard

      navigate("/dashboard");

      await addUserToDb(userCredential.uid, registerData);
    } catch (error) {
      setRegisterError(errorHandler(error.code));
      setIsLoading(false);
      console.log(error);
    }
  };

  // Google Sign in

  const handleGoogleSignIn = async () => {
    //

    try {
      const googleProvider = new GoogleAuthProvider();

      const signReq = await signInWithPopup(auth, googleProvider);

      const credential = GoogleAuthProvider.credentialFromResult(signReq);

      const userCredential = signReq.user;

      dispatch({
        type: "REGISTER",
        payload: { email: userCredential.email, id: userCredential.uid },
      });

      // Redirect to Dashboard

      navigate("/dashboard");

      await addUserToDb(userCredential.uid, {
        name: userCredential.displayName,
        email: userCredential.email,
        pwd: null,
        imgUrl: userCredential.photoURL,
      });
    } catch (error) {
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error.code);
    }
  };

  // Layout

  return (
    <main className="f-center w-full max-h-screen bg-white px-6">
      <section className="f-col gap-10">
        <div className="f-col gap-8">
          {/*  */}

          <h1>Get Started for free! </h1>

          <form className="f-col gap-4" onSubmit={handleSignUp}>
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              required={true}
              disabled={isLoading}
              error=""
              onChange={(e) => {
                setRegisterData({ ...registerData, name: e.target.value });
              }}
            />

            <Input
              type="email"
              label="Email"
              placeholder="name@email.com"
              required={true}
              disabled={isLoading}
              error=""
              onChange={(e) => {
                setRegisterData({ ...registerData, email: e.target.value });
              }}
            />

            <Input
              type="password"
              label="Password"
              placeholder="6+ characters"
              required={true}
              disabled={isLoading}
              error={registerError}
              onChange={(e) => {
                setRegisterData({ ...registerData, pwd: e.target.value });
              }}
            />

            <button
              disabled={isLoading}
              className={`btn btn-primary  f-center gap-2 ${
                isLoading && "opacity-80 cursor-not-allowed"
              } `}
            >
              {isLoading ? (
                <>
                  Register <LoadingIcon />
                </>
              ) : (
                "Register"
              )}
            </button>

            <span className="p-4 text-center text-brown-500">
              Or register using
            </span>
          </form>
          <button
            className={`btn btn-accent f-center gap-2 ${
              isLoading && "cursor-not-allowed"
            }`}
            disabled={isLoading}
            onClick={handleGoogleSignIn}
          >
            <img src={google} alt="google icon" className="w-4 lg:w-6" />
            <span>Sign in with google</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Register;
