import { Link } from "react-router-dom";
import logo from "../../assets/icons/Logo.svg";

const Navbar = () => {
  return (
    <header className="f-between items-center px-3 py-6 lg:px-8">
      <Link to="/">
        <img src={logo} alt="minvoicer logo" className="w-32 lg:w-48" />
      </Link>
      <div className="flex gap-2">
        <Link to="/login">
          <button className="btn text-white">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-primary-w">Register</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
