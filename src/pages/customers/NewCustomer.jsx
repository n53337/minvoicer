import { Link } from "react-router-dom";
import CustomerForm from "../../components/Customers/CustomerForm";
import AppSkeleton from "../../components/shared/AppSkeleton";

const NewCustomer = () => {
  return (
    <AppSkeleton
      title="New Customer"
      utils={{
        primary: <button className="btn btn-accent">Discard</button>,
        secondary: (
          <Link>
            <button className="btn btn-primary">Save Changes</button>
          </Link>
        ),
      }}
    >
      <div className="w-full h-full md:f-center">
        <CustomerForm data={"new"} />
      </div>
    </AppSkeleton>
  );
};

export default NewCustomer;
