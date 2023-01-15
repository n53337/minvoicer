import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import CustomerForm from "../../components/shared/CustomerForm";
import AppSkeleton from "../../components/shared/AppSkeleton";

const Profile = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const [dataTest, setDataTest] = useState(state.user);

  const navigate = useNavigate();

  // Fetch User Data

  useEffect(() => {
    let mounted = true;

    const fetchUserData = async () => {
      const docRef = doc(db, "users", state.user.id);
      console.log("mounted");

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        if (mounted) {
          console.log(docSnap.data());
          setDataTest({ ...dataTest, ...docSnap.data() });
        }
      } else {
        console.log("No such document!");
      }
    };

    fetchUserData();

    // Clean up

    return () => {
      console.log("unmounted");
      mounted = false;
    };
  }, []);

  // Logout

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
