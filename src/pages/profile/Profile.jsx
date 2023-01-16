import CustomerForm from "../../components/shared/CustomerForm";
import AppSkeleton from "../../components/shared/AppSkeleton";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { fetchUserProfile } from "../../utils/fetchData";

const Profile = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const [userProfile, setUserProfile] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetchUserProfile(state.user.id, setUserProfile);
  }, []);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <AppSkeleton
      title="Profile"
      utils={{
        primary: <button className="btn btn-accent">Discard</button>,
        secondary: (
          <Link>
            <button className="btn btn-primary">Save Changes</button>
          </Link>
        ),
      }}
    >
      <div className="w-full h-full md:f-col items-center justify-center gap-10 ">
        <CustomerForm data={"user"} />
        <div className="f-center">
          <button
            className="btn btn-accent mt-4 md:mt-0"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </AppSkeleton>
  );
};

export default Profile;
