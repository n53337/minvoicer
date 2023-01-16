import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InvoiceRow from "../../components/Invoices/InvoiceRow";
import AppSkeleton from "../../components/shared/AppSkeleton";
import { LoadingScreen } from "../../components/shared/Loading";
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
      {!invoices ? (
        <LoadingScreen />
      ) : (
        <div className="max-h-full overflow-auto">
          <Table tableHead={tableHead}>
            <InvoiceRow data={invoices} />
          </Table>
        </div>
      )}
    </AppSkeleton>
  );
};

export default Invoices;
