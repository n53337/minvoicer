import {
  HomeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/LogoIcon.svg";

const Navbar = ({}) => {
  const page = "dashboard";
  const nonActiveStyle = "opacity-50 hover:opacity-100 ease-in duration-300";

  return (
    <header className="h-14 w-full md:w-16 md:h-screen f-center my-4 md:my-0 md:mx-4 fixed md:static ">
      <div className="w-3/4 h-full md:w-full md:h-3/4 bg-brown rounded-3xl shadow-2xl flex md:f-col justify-between items-center px-4 md:py-6">
        <img src={logo} alt="minvoicer logo" className="w-7 md:w-3/4" />
        <nav className="flex md:f-col gap-4 md:gap-8 md:pb-24">
          <Link to="/dashboard">
            <div className="f-col items-center gap-0.5" title="Dashboard">
              <HomeIcon
                className={`w-6 text-white ${
                  page !== "dashboard" && nonActiveStyle
                }`}
              />
              {page === "dashboard" && (
                <span className="w-1 h-1 bg-white rounded-full"></span>
              )}
            </div>
          </Link>

          <Link to="/invoices">
            <div className="f-col items-center gap-0.5" title="Invoices">
              <DocumentTextIcon
                className={`w-6 text-white ${
                  page !== "invoices" && nonActiveStyle
                }`}
              />
              {page === "invoices" && (
                <span className="w-1 h-1 bg-white rounded-full"></span>
              )}
            </div>
          </Link>

          <Link to="/customers">
            <div className="f-col items-center gap-0.5" title="Customers">
              <UserGroupIcon
                className={`w-6 text-white ${
                  page !== "customers" && nonActiveStyle
                }`}
              />
              {page === "customers" && (
                <span className="w-1 h-1 bg-white rounded-full"></span>
              )}
            </div>
          </Link>

          <Link to="/products">
            <div className="f-col items-center gap-0.5" title="Products">
              <BuildingStorefrontIcon
                className={`w-6 text-white ${
                  page !== "products" && nonActiveStyle
                }`}
              />
              {page === "products" && (
                <span className="w-1 h-1 bg-white rounded-full"></span>
              )}
            </div>
          </Link>
        </nav>

        <Link to="/profile">
          <div
            className="w-7 h-7 bg-white text-brown rounded-full f-center"
            title="Profile"
          >
            J
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
