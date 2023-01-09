import AppSkeleton from "../../components/shared/AppSkeleton";
import Table from "../../components/shared/Table";

const Status = ({ status }) => {
  return <aside className="status">{status}</aside>;
};

const Invoices = () => {
  const tableData = {
    head: ["Product Name", "price", "Quantity", "Date", "Actions"],
    body: [
      ["Rotto Clipper", "49.00$", 320, "03 Jan 2023", <Status status="Paid" />],
      ["Something", "42.00$", 30, "07 Jan 2023", <Status status="Pending" />],
      ["Product", "39.99$", 3, "01 Jan 2023", <Status status="Paid" />],
    ],
  };

  return (
    <AppSkeleton title="Invoices" utils>
      <div className="max-h-full overflow-auto">
        <Table tableData={tableData} />
      </div>
    </AppSkeleton>
  );
};

export default Invoices;
