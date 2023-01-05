import { Link } from "react-router-dom";
import logo from "../../assets/icons/Logo.svg";

const Navbar = () => {
  return (
    <header className="f-between items-center px-3 py-6 lg:px-8">
      <Link to="/">
        <img src={logo} alt="minvoicer logo" className="w-32 lg:w-48" />
      </Link>
      <div className="">
        <Link>
          <button className="btn text-white">Sign in</button>
        </Link>
        <button className="btn btn-primary-w">Register</button>
      </div>
    </header>
  );
};

export default Navbar;
