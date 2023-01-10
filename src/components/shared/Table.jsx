import InvoiceRow from "../Invoices/InvoiceRow";

const Table = ({ children, tableData }) => {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full max-h-full my-6 table-auto">
        <thead className="w-full border-2 md:border-4 border-brown">
          <tr className="text-brown">
            {tableData.head.map((t) => {
              return <th key={t}>{t}</th>;
            })}
          </tr>
        </thead>

        <tbody className="w-full">
          {/* <InvoiceRow /> */}
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
