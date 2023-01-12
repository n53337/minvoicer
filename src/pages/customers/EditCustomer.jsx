import { Link, useParams } from "react-router-dom";
import AppSkeleton from "../../components/shared/AppSkeleton";
import CustomerForm from "../../components/Customers/CustomerForm";

const EditCustomer = () => {
  const { id: customerId } = useParams();

  const customers = [
    {
      id: "10",
      name: "John Doe",
      fullName: "John Doe C.",
      email: "test@email.com",
      phone: "(334) 480-9421",
      street: "3742 Opelika Rd #2",
      city: "Phenix",
      zip: 36870,
      country: "Usa",
      created: "03 Jan 2023",
    },
    {
      id: "102",
      name: "John De",
      fullName: "John Doe C.",
      email: "test@email.com",
      phone: "(334) 480-9421",
      street: "3742 Opelika Rd #2",
      city: "Phenix",
      zip: 36870,
      country: "Usa",
      created: "03 Jan 2023",
    },
  ];

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
        <CustomerForm
          data={customers.filter(
            (customer) => customer.id === customerId.substring(1)
          )}
        />
      </div>
    </AppSkeleton>
  );
};

export default EditCustomer;
