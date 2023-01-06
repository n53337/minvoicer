import { BeakerIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Input from "../shared/Input";
const LogForm = () => {
  return (
    <section>
      <nav>
        <Link to="/register">
          <p className="link">Sign up</p>
        </Link>
        <Link to="/login">
          <p className="link">Login</p>
        </Link>
      </nav>
      <div>
        <h1>Get Started for free!</h1>
        <form>
          <Input
            type="password"
            label="Password"
            placeHolder="Enter your name"
            required={true}
            error="Error Handling"
          />
          <button className="btn btn-primary">Register</button>
          <span>Or register using</span>
          <button className="btn btn-accent">
            <img src="" alt="" />
            <span>Sign in with google</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default LogForm;
