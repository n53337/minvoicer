import InvoiceRow from "../../components/Invoices/InvoiceRow";
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

  const test = [
    {
      name: "Rotto Clipper",
      price: 49.0,
      qty: 320,
      date: "03 Jan 2023",
      status: "paid",
    },
    {
      name: "Something",
      price: 43.0,
      qty: 30,
      date: "07 Jan 2023",
      status: "pending",
    },
    {
      name: "Product",
      price: 39.0,
      qty: 30,
      date: "01 Jan 2023",
      status: "paid",
    },
  ];

  return (
    <AppSkeleton title="Invoices" utils>
      <div className="max-h-full overflow-auto">
        <Table tableData={tableData}>
          <InvoiceRow data={test} />
        </Table>
      </div>
    </AppSkeleton>
  );
};

export default Invoices;
