import { useState, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { app } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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

  // Handle Register

  const handleSignUp = async (e) => {
    e.preventDefault();

    setRegisterError(null);

    setIsLoading(true);

    try {
      const auth = getAuth(app);
      const signReq = await createUserWithEmailAndPassword(
        auth,
        registerData.email,
        registerData.pwd
      );

      const userCredential = signReq.user;

      // dispatch({
      //   type: "LOGIN",
      //   payload: { email: userCredential.email, id: userCredential.uid },
      // });

      // // Redirect to Dashboard

      // navigate("/dashboard");

      console.log(userCredential);
    } catch (error) {
      setRegisterError(errorHandler(error.code));
      setIsLoading(false);
      throw new Error(error.code);
    }
  };

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

            <button className="btn btn-accent f-center gap-2">
              <img src={google} alt="google icon" className="w-4 lg:w-6" />
              <span>Sign in with google</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Register;
