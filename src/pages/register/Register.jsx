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
  collection,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Input from "../../components/shared/Input";
import Loading from "../../components/shared/Loading";
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

      await addUserToDb(userCredential.uid);
    } catch (error) {
      setRegisterError(errorHandler(error.code));
      setIsLoading(false);
      throw new Error(error.code);
    }
  };

  // Google Sign in

  const handleGoogleSignIn = async () => {
    //

    try {
      const googleProvider = new GoogleAuthProvider();

      const signReq = await signInWithPopup(auth, googleProvider);

      const credential = GoogleAuthProvider.credentialFromResult(signReq);

      const token = credential.accessToken;

      const user = signReq.user;

      console.log(user);
    } catch (error) {
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error.code);
      console.log(email, credential);
    }
  };

  // Add New user to DB

  const addUserToDb = async (uid) => {
    try {
      const docRef = await setDoc(doc(db, "users", uid), {
        createdAt: serverTimestamp(),
        name: registerData.name,
        email: registerData.email,
        pwd: registerData.pwd,
      });
      console.log("Document written ");
    } catch (error) {
      throw new Error(error);
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
                  Register <Loading />
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
            className="btn btn-accent f-center gap-2"
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
