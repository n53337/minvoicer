import { Link } from "react-router-dom";

const CustomerRow = ({ data }) => {
  return (
    <>
      {data.map((row) => {
        return (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.created}</td>
            <td className="f-center gap-4">
              <Link to={`@${row.id}`}>
                <button className="btn btn-primary text-xs">Edit</button>
              </Link>
              <button className="btn btn-accent text-xs">Delete</button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CustomerRow;
