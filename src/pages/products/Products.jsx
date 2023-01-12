import AppSkeleton from "../../components/shared/AppSkeleton";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <AppSkeleton
      title="Products"
      utils={{
        primary: <button className="btn btn-accent">Filter By</button>,
        secondary: (
          <Link to="new">
            <button className="btn btn-primary">New Customer</button>
          </Link>
        ),
      }}
    ></AppSkeleton>
  );
};

export default Products;
