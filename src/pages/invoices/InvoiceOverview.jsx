import { useParams } from "react-router-dom";
import AppSkeleton from "../../components/shared/AppSkeleton";

const InvoiceOverview = () => {
  const { id } = useParams();
  return (
    <AppSkeleton>
      <div>PDF Version here!</div>
    </AppSkeleton>
  );
};

export default InvoiceOverview;
