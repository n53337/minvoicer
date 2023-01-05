import { Link } from "react-router-dom";
import logo from "../../assets/icons/logoDark.svg";

const Footer = () => {
  return (
    <footer className="py-8 px-3 lg:p-8 f-between">
      <Link to="/">
        <img src={logo} alt="minvoicer logo" className="w-32 lg:w-48" />
      </Link>
      <p>@{new Date().getFullYear()} minvoicer</p>
    </footer>
  );
};

export default Footer;
