const InvoiceRow = ({ data }) => {
  return (
    <>
      {data.map((row) => {
        return (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.price}</td>
            <td>{row.qty}</td>
            <td>{row.date}</td>
            <td className="f-center">
              <div className="status">{row.status}</div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default InvoiceRow;
