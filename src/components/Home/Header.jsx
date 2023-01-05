import { Link } from "react-router-dom";
import dashboardScreen from "../../assets/images/Dashboard.png";

const Header = () => {
  return (
    <div className="p-6 lg:px-20 lg:py-16 f-col gap-10 text-center text-white ">
      <div className="f-col gap-4">
        <h1 className="leading-normal">
          <span>Effortlessly</span> manage your finances and get paid faster
          with our user-friendly invoice builder
        </h1>
        <p>
          Make an impression with beautifully designed invoices created using
          our invoice builder tool
        </p>
      </div>
      <Link to="/register" className="self-center">
        <button className="btn btn-accent-w ">Get Started</button>
      </Link>
      <figure className="z-50 md:w10/12 lg:w-9/12 self-center">
        <img
          src={dashboardScreen}
          alt="minvoicer app screenshot"
          className=" border rounded-2xl shadow-2xl shadow-white "
        />
      </figure>
    </div>
  );
};

export default Header;
