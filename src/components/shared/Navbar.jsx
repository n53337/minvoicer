import {
  HomeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/icons/LogoIcon.svg";
const Navbar = ({}) => {
  const page = "dashboard";
  const navs = [
    {
      tab: "dashboard",
      link: "/",
      active: page === this.tab,
      icon: <HomeIcon className="w-6 text-white" />,
    },
  ];
  console.log(navs);
  return (
    <header className="w-16 h-screen f-center ">
      <div className="w-full h-3/4 bg-brown rounded-3xl shadow-2xl f-col justify-between items-center py-6">
        <div className="f-col justify-between items-center gap-8">
          <img src={logo} alt="minvoicer logo" className="w-3/4" />
          <nav className="f-col gap-8">
            <div className="f-col items-center gap-0.5">
              {/* <HomeIcon className="w-6 text-white " /> */}
              {navs[0].icon}
              <span className="w-1 h-1 bg-white rounded-full"></span>
            </div>
          </nav>
        </div>
        <div className="w-7 h-7 bg-white text-brown rounded-full f-center">
          J
        </div>
      </div>
    </header>
  );
};

export default Navbar;
