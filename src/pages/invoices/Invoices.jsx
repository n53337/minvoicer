import AppSkeleton from "../../components/shared/AppSkeleton";
import Table from "../../components/shared/Table";

const Invoices = () => {
  return (
    <AppSkeleton title="Invoices" utils>
      <div className="max-h-full overflow-auto">
        <Table />
      </div>
    </AppSkeleton>
  );
};

export default Invoices;
