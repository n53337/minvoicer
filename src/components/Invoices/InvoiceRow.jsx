import { Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ViewInvoice from "./ViewInvoice";

const InvoiceRow = ({ data }) => {
  const navigate = useNavigate();

  // Handle Invoice Overview

  const handleInvoiceClick = (id) => {
    navigate(`@${id}`);
  };

  return (
    <>
      {data.map((row) => {
        return (
          <tr
            key={row.id}
            className="cursor-pointer hover:bg-brown-100 hover:border hover:border-brown"
            onClick={() => handleInvoiceClick(row.id)}
          >
            <td>{`#${row.id}`}</td>
            <td>{new Date(row.createdAt.seconds * 1000).toDateString()}</td>
            <td>{row.billTo.name}</td>
            <td>{`$${row.amount}`}</td>
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
