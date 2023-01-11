import Input from "../shared/Input";
import google from "../../assets/icons/Google.svg";
const LogForm = ({ register }) => {
  return (
    <section className="f-col gap-10">
      <div className="f-col gap-8">
        <h1>{register ? "Get Started for free!" : "Welcome Back!"} </h1>

        <form className="f-col gap-4">
          {register && (
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              required={true}
              error=""
            />
          )}

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

          <button className="btn btn-primary py-4">
            {register ? "Register" : "login"}
          </button>

          {register && (
            <span className="p-4 text-center text-brown-500">
              Or register using
            </span>
          )}

          {register && (
            <button className="btn btn-accent py-4 f-center gap-2">
              <img src={google} alt="google icon" className="w-4 lg:w-6" />
              <span>Sign in with google</span>
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default LogForm;
