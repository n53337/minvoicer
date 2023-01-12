import { Link } from "react-router-dom";
import ProductForm from "../../components/Products/ProductForm";
import AppSkeleton from "../../components/shared/AppSkeleton";

const NewProduct = () => {
  return (
    <AppSkeleton
      title="New Product"
      utils={{
        primary: <button className="btn btn-accent">Discard</button>,
        secondary: (
          <Link>
            <button className="btn btn-primary">Save Changes</button>
          </Link>
        ),
      }}
    >
      <div className="w-full h-full md:f-center">
        <ProductForm data={"new"} />
      </div>
    </AppSkeleton>
  );
};

export default NewProduct;
