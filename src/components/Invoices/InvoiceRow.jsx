import { useNavigate } from "react-router-dom";
import ViewInvoice from "./ViewInvoice";

const InvoiceRow = ({ data }) => {
  const navigate = useNavigate();
  // Handle Invoice Overview
  const handleInvoiceClick = (id) => {
    console.log(id);
    navigate(`${id}`);
  };

  return (
    <>
      {data.map((row) => {
        return (
          <tr
            key={row.name}
            className="cursor-pointer hover:bg-brown-100 hover:border hover:border-brown"
            onClick={() => handleInvoiceClick(row.id)}
          >
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
