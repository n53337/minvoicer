import { Link, useParams } from "react-router-dom";
import AppSkeleton from "../../components/shared/AppSkeleton";

const InvoiceOverview = () => {
  const { id } = useParams();
  return (
    <AppSkeleton
      title={
        <select
          id="status"
          className=" text-base p-2 border border-brown rounded-md outline-brown text-brown bg-white"
        >
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
          <option value="unpaid">UnPaid</option>
        </select>
      }
      utils={{
        primary: (
          <Link to="#">
            <button className="btn btn-accent">Send</button>
          </Link>
        ),
        secondary: (
          <Link to="#">
            <button className="btn btn-primary">Print</button>
          </Link>
        ),
      }}
    >
      <div>PDF Version here!</div>
    </AppSkeleton>
  );
};

export default InvoiceOverview;
