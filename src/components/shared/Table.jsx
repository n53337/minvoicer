const Table = () => {
  // wrap all the data on a single obj
  const tableData = {
    head: ["Product Name", "price", "Quantity", "Date", "Actions"],
    body: [
      ["Rotto Clipper", "49.00$", 320, "03 Jan 2023"],
      ["Something", "42.00$", 30, "07 Jan 2023"],
      ["Product", "39.99$", 3, "01 Jan 2023"],
    ],
    btns: true,
  };
  return (
    <div className="w-full overflow-auto">
      <table className="w-full max-h-full my-6">
        <thead className="w-full border-2 md:border-4 border-brown  ">
          <tr className="text-brown">
            {tableData.head.map((t) => {
              return <th key={t}>{t}</th>;
            })}
          </tr>
        </thead>

        <tbody className="w-full">
          {tableData.body.map((tr) => {
            return (
              <tr key={tr[0]}>
                {tr.map((td) => {
                  return <td key={td}>{td}</td>;
                })}

                {tableData.btns && (
                  <td className="f-center gap-2">
                    <button className="btn btn-accent">Delete</button>
                    <button className="btn btn-primary px-7">Edit</button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
