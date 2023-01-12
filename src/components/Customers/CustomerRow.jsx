const CustomerRow = ({ data }) => {
  return (
    <>
      {data.map((row) => {
        return (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.created}</td>
            <td className="f-center gap-4">
              <button className="btn btn-primary text-xs">Edit</button>
              <button className="btn btn-accent text-xs">Delete</button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CustomerRow;
