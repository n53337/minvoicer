import { Link, useParams } from "react-router-dom";
import AppSkeleton from "../../components/shared/AppSkeleton";

const InvoiceOverview = () => {
  const { id } = useParams();
  return (
    <AppSkeleton
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
