import { useState } from "react";
import Input from "../../components/shared/Input";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: null, pwd: null });

  const handleLogin = async (e) => {
    e.preventDefault();

    // ! Login Handle

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
              error=""
              onChange={(e) =>
                setLoginData({ ...loginData, pwd: e.target.value })
              }
            />

            <button className="btn btn-primary py-4">Login</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
