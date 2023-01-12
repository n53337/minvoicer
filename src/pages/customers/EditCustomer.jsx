import { Link, useParams } from "react-router-dom";
import AppSkeleton from "../../components/shared/AppSkeleton";
import CustomerForm from "../../components/Customers/CustomerForm";

const EditCustomer = () => {
  const { id: customerId } = useParams();

  return (
    <AppSkeleton
      title={`Customer #${customerId.substring(1)}`}
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
        <CustomerForm />
      </div>
    </AppSkeleton>
  );
};

export default EditCustomer;
