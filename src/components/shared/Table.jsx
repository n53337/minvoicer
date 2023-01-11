import InvoiceRow from "../Invoices/InvoiceRow";

const Table = ({ children, tableHead }) => {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full max-h-full my-6 table-auto">
        {/* Table Head */}
        <thead className="w-full border-2 md:border-4 border-brown">
          <tr className="text-brown">
            {tableHead.map((t) => {
              return <th key={t}>{t}</th>;
            })}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="w-full">{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
