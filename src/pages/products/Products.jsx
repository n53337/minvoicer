import AppSkeleton from "../../components/shared/AppSkeleton";
import Table from "../../components/shared/Table";
import { Link } from "react-router-dom";
import ProductRow from "../../components/Products/ProductRow";

const Products = () => {
  const tableHead = ["Product Name", "Price", "Quantity", "Created", "Actions"];

  const tableData = [
    {
      name: "Product1",
      price: "$320",
      qty: 30,
      created: "03 Jan 2023",
      id: "102",
    },
    {
      name: "Rotto Clipper",
      price: "$320",
      qty: 30,
      created: "03 Jan 2023",
      id: "10",
    },
  ];

  return (
    <AppSkeleton
      title="Products"
      utils={{
        primary: <button className="btn btn-accent">Filter By Name</button>,
        secondary: (
          <Link to="new">
            <button className="btn btn-primary">New Product</button>
          </Link>
        ),
      }}
    >
      <div className="max-h-full overflow-auto">
        <Table tableHead={tableHead}>
          <ProductRow data={tableData} />
        </Table>
      </div>
    </AppSkeleton>
  );
};

export default Products;
