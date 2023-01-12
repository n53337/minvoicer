import {
  TrashIcon,
  PlusIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import Input from "../../components/shared/Input";
import AppSkeleton from "../../components/shared/AppSkeleton";
import { Link } from "react-router-dom";

const NewInvoice = () => {
  return (
    <AppSkeleton
      title="New Invoice"
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
        <form className="flex f-col md:flex-row items-center gap-8 md:gap-16 text-brown">
          {/* Data */}
          <div className="flex-1 f-col gap-4 ">
            {/* Bill From */}

            <span className="flex items-center">
              <span className="h-0.5 flex-1 bg-brown-100"></span>
              <p className="flex-1 font-semibold text-lg text-center">
                Bill From
              </p>
              <span className="h-0.5 flex-1 bg-brown-100"></span>
            </span>
            <Input
              type="text"
              label="Street Adress"
              defaultValue="default value"
            />
            <div className="flex gap-2 md:gap-10">
              <Input type="text" label="City" />
              <Input type="text" label="Post Code" />
              <Input type="text" label="Country" />
            </div>

            {/* Bill To */}

            <span className="flex items-center">
              <span className="h-0.5 flex-1 bg-brown-100"></span>
              <p className="flex-1 font-semibold text-lg text-center">
                Bill To
              </p>
              <span className="h-0.5 flex-1 bg-brown-100"></span>
            </span>

            {/* Radio Select */}

            <div className="flex gap-4 justify-evenly text-center">
              <Input type="radio" label="Import from exesting user" />
              <Input type="radio" label="Custom Informations" />
            </div>

            <Input type="text" label="Client's Name" />
            <Input type="email" label="Client's Email" />
            <Input type="text" label="Street Adress" />
            <div className="flex gap-2 md:gap-10">
              <Input type="text" label="City" />
              <Input type="text" label="Post Code" />
              <Input type="text" label="Country" />
            </div>
          </div>

          <span className="h-0.5 w-2/3 md:w-0.5 md:h-96 bg-brown-100"></span>

          {/* Details */}

          <div className="flex-1 f-col gap-4">
            {/*  */}

            {/* Invoice Details */}

            <span className="flex items-center ">
              <span className="h-0.5 flex-1 bg-brown-100"></span>
              <p className="flex-1 font-semibold text-lg text-center">
                Invoice Details
              </p>
              <span className="h-0.5 flex-1 bg-brown-100"></span>
            </span>
            <div className=" flex gap-2 md:gap-10 justify-between">
              <div className="flex-1">
                <Input type="date" label="Invoice Date" />
              </div>
            </div>
            <Input type="text" label="Project Description" />

            {/* Product List */}

            <span className="flex items-center">
              <span className="h-0.5 flex-1 bg-brown-100"></span>
              <p className="flex-1 font-semibold text-lg text-center">
                Product List
              </p>
              <span className="h-0.5 flex-1 bg-brown-100"></span>
            </span>
            <div className="flex items-center gap-2">
              <div className="f-col text-brown gap-1">
                <label htmlFor="product" className="font-normal text-sm">
                  Product
                </label>
                <select
                  name="product"
                  id="product"
                  placeholder="Product1"
                  className=" px-4 py-3  text-brown text-sm border-2 border-brown-100 rounded-lg placeholder:text-brown-100"
                >
                  <option value="product1">product1</option>
                  <option value="product2">product2</option>
                  <option value="product3">product3</option>
                </select>
              </div>
              <Input type="number" label="Qty." />
              <Input type="number" label="Price" />
              <Input type="text" label="Total" disabled={true} />
              <TrashIcon className="w-16 pt-4 cursor-pointer text-brown hover:text-brown-500" />
            </div>
            <div className="flex gap-2 self-center cursor-pointer hover:text-brown-500">
              <PlusIcon className="w-6" /> <span>Add New Product</span>
            </div>
          </div>
        </form>
      </div>
    </AppSkeleton>
  );
};

export default NewInvoice;
