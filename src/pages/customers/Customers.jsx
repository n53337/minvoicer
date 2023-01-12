import { Link } from "react-router-dom";
import CustomerRow from "../../components/Customers/CustomerRow";
import AppSkeleton from "../../components/shared/AppSkeleton";
import Table from "../../components/shared/Table";

const Customers = () => {
  const tableHead = ["Customer Name", "Email", "Created", "Actions"];

  const tableData = [
    {
      name: "John Doe",
      email: "test@email.com",
      created: "03 Jan 2023",
      id: "10",
    },
    {
      id: "102",
      name: "Jonhatan Doe",
      email: "test@email.com",
      created: "03 Jan 2023",
    },
  ];

  return (
    <AppSkeleton
      title="Customers"
      utils={{
        primary: <button className="btn btn-accent">Filter By Name</button>,
        secondary: (
          <Link to="new">
            <button className="btn btn-primary">New Customer</button>
          </Link>
        ),
      }}
    >
      <div className="max-h-full overflow-auto">
        <Table tableHead={tableHead}>
          <CustomerRow data={tableData} />
        </Table>
      </div>
    </AppSkeleton>
  );
};

export default Customers;
