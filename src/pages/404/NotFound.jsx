import { Link } from "react-router-dom";
import notFoundImg from "../../assets/icons/pageNotFound.svg";

const NotFound = () => {
  return (
    <main className="w-screen h-screen f-col items-center justify-center gap-6 text-brown-700">
      <img src={notFoundImg} alt="Not Found Image" className="w-1/3" />
      <p>
        Page Not Found, Go Back{" "}
        <Link to="/" className="text-brown underline">
          Home
        </Link>
      </p>
    </main>
  );
};

export default NotFound;
