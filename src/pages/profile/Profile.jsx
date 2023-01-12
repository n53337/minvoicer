import { Link } from "react-router-dom";
import CustomerForm from "../../components/shared/CustomerForm";
import AppSkeleton from "../../components/shared/AppSkeleton";

const Profile = () => {
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
          <button className="btn btn-accent mt-4 md:mt-0">Logout</button>
        </div>
      </div>
    </AppSkeleton>
  );
};

export default Profile;
