import { useState } from "react";
import Input from "../../components/shared/Input";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import Loading from "../../components/shared/Loading";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: null, pwd: null });
  const [isLoading, setIsLoading] = useState(false);

  // ! Handle Login

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const auth = getAuth(app);
      const signReq = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.pwd
      );

      const userCredential = signReq.user.metadata;
      console.log(userCredential);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(errorCode, errorMessage);
    }
  };

  return (
    <main className="f-center w-full max-h-screen bg-white px-6">
      <section className="f-col gap-10">
        <div className="f-col gap-8">
          {/*  */}

          <h1>Welcome Back! </h1>

          <form className="f-col gap-4" onSubmit={handleLogin}>
            <Input
              type="email"
              label="Email"
              placeholder="name@email.com"
              required={true}
              disabled={isLoading}
              error=""
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />

            <Input
              type="password"
              label="Password"
              placeholder="6+ characters"
              required={true}
              disabled={isLoading}
              error=""
              onChange={(e) =>
                setLoginData({ ...loginData, pwd: e.target.value })
              }
            />

            <button
              disabled={isLoading}
              className={`btn btn-primary  f-center gap-2 ${
                isLoading && "opacity-80 cursor-not-allowed"
              } `}
            >
              {isLoading ? (
                <>
                  Login <Loading />
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
