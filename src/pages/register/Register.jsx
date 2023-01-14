import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import Input from "../../components/shared/Input";
import Loading from "../../components/shared/Loading";
import google from "../../assets/icons/Google.svg";

const Register = () => {
  //

  const [registerData, setRegisterData] = useState({ email: null, pwd: null });
  const [isLoading, setIsLoading] = useState(false);
  const { state, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
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
              error=""
            />

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

            <button className="btn btn-primary ">Register</button>

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
