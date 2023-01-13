import { useState } from "react";
import Input from "../../components/shared/Input";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: null, pwd: null });

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginData({ emai: e.target[0].value, pwd: e.target[1].value });
  };

  // const auth = getAuth();
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });

  console.log(loginData);

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
            />

            <Input
              type="password"
              label="Password"
              placeholder="6+ characters"
              required={true}
              error=""
            />

            <button className="btn btn-primary py-4">Login</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
