const Table = ({ tableData }) => {
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
          {tableData.body.map((tr) => {
            return (
              <tr
                key={tr[0]}
                className="cursor-pointer hover:bg-brown-100 duration-100"
              >
                {tr.map((td) => {
                  return <td key={td}>{td}</td>;
                })}

                {/* {tableData.btns && (
                  <td className="f-center gap-2">
                    <button className="btn btn-accent">Delete</button>
                    <button className="btn btn-primary px-7">Edit</button>
                  </td>
                )} */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
