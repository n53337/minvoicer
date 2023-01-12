import { TagIcon, PencilIcon } from "@heroicons/react/24/outline";
import Input from "../shared/Input";

const ProductForm = ({ data }) => {
  const [product] = data ? data : [null];

  return (
    <>
      {product ? (
        <form className="md:w-3/4 text-brown f-col gap-8 ">
          {/* Profile Picture */}
          <div className="pt-4 md:pt-0 f-center gap-4">
            <div className="relative cursor-pointer">
              <TagIcon className="w-16 md:w-20 border-2 md:border-4 border-brown rounded-full p-2 " />
              <span>
                <PencilIcon className="absolute w-5 md:w-6 top-3 -left-1 bg-brown text-white rounded-full p-1" />
                <input
                  type="file"
                  accept=".jpg,.png,.jpeg,.gif"
                  className="absolute w-full h-full top-0 cursor-pointer opacity-0 text-[0px]"
                />
              </span>
            </div>
            <h2 className="text-xl">Product Picture</h2>
          </div>

          {/* Form */}
          <div className="md:flex md:gap-14">
            <div className="flex-1 f-col md:gap-4">
              <Input
                label="Product Name"
                type="text"
                defaultValue={product.name}
              />
              <Input label="Price" type="text" defaultValue={product.price} />
            </div>

            <div className="flex-1 f-col md:gap-4">
              <Input
                label="Quantity"
                type="number"
                defaultValue={product.qty}
              />
              <Input
                label="Product Type"
                type="text"
                defaultValue={product.type}
              />
            </div>
          </div>
        </form>
      ) : (
        <div className="w-full h-full f-center">
          <h1 className="">No product Found :(</h1>
        </div>
      )}
    </>
  );
};

export default ProductForm;
