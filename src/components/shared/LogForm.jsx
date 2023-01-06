import { BeakerIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
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
        <h2>Get Started for free!</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <span>Error Handler</span>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <span>Error Handler</span>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <span>Error Handler</span>
          </div>
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
