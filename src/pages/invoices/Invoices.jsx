import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InvoiceRow from "../../components/Invoices/InvoiceRow";
import AppSkeleton from "../../components/shared/AppSkeleton";
import Table from "../../components/shared/Table";
import { GlobalContext } from "../../Context/GlobalContext";
import { fetchInvoices } from "../../utils/fetchData";

const Status = ({ status }) => {
  return <aside className="status">{status}</aside>;
};

const Invoices = () => {
  //

  const { state } = useContext(GlobalContext);

  const [invoices, setInvoices] = useState();

  const tableHead = ["Invoice", "Date", "To", "Amount", "Actions"];

  // Fetch Invoices

  useEffect(() => {
    fetchInvoices(state.user.id, setInvoices);
  }, []);

  console.log(invoices);

  const tableData = [
    {
      id: "10",
      date: "03 Jan 2023",
      to: "John Doe",
      amount: 49.0,
      status: "paid",
    },
    {
      id: "20",
      date: "04 Jan 2023",
      to: "Jonhatan",
      amount: 900.0,
      status: "pending",
    },
    {
      id: "30",
      date: "03 Jan 2023",
      to: "Marya Doe",
      amount: 549.0,
      status: "paid",
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
