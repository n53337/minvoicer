import { Link, useParams } from "react-router-dom";
import AppSkeleton from "../../components/shared/AppSkeleton";
import ProductForm from "../../components/Products/ProductForm";

const EditProduct = () => {
  const { id: productId } = useParams();

  const products = [
    {
      id: "102",
      name: "Rotto Clipper",
      qty: 30,
      price: "300$",
      type: "physical",
    },
    {
      id: "10",
      name: "Rotto Clipper",
      qty: 30,
      price: "300$",
      type: "physical",
    },
  ];

  return (
    <AppSkeleton
      title={`Product #${productId.substring(1)}`}
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
        <ProductForm
          data={products.filter(
            (product) => product.id === productId.substring(1)
          )}
        />
      </div>
    </AppSkeleton>
  );
};

export default EditProduct;
