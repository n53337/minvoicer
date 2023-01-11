import { Link } from "react-router-dom";
import InvoiceRow from "../../components/Invoices/InvoiceRow";
import AppSkeleton from "../../components/shared/AppSkeleton";
import Table from "../../components/shared/Table";

const Status = ({ status }) => {
  return <aside className="status">{status}</aside>;
};

const Invoices = () => {
  const tableHead = ["Product Name", "price", "Quantity", "Date", "Actions"];

  const tableData = [
    {
      name: "Rotto Clipper",
      price: 49.0,
      qty: 320,
      date: "03 Jan 2023",
      status: "paid",
      id: "10",
    },
    {
      name: "Something",
      price: 43.0,
      qty: 30,
      date: "07 Jan 2023",
      status: "pending",
      id: "20",
    },
    {
      name: "Product",
      price: 39.0,
      qty: 30,
      date: "01 Jan 2023",
      status: "paid",
      id: "30",
    },
  ];

  return (
    <AppSkeleton
      title="Invoices"
      utils={{
        primary: <button className="btn btn-accent">Filter By Status</button>,
        secondary: (
          <Link to="new">
            <button className="btn btn-primary">New Invoice</button>
          </Link>
        ),
      }}
    >
      <div className="max-h-full overflow-auto">
        <Table tableHead={tableHead}>
          <InvoiceRow data={tableData} />
        </Table>
      </div>
    </AppSkeleton>
  );
};

export default Invoices;
