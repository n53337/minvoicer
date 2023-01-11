import { TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import Input from "../../components/shared/Input";
import AppSkeleton from "../../components/shared/AppSkeleton";

const NewInvoice = () => {
  return (
    <AppSkeleton>
      <form className="flex f-col md:flex-row gap-4 md:gap-16 text-brown">
        {/* Data */}
        <div className="flex-1 f-col gap-4">
          {/* Bill From */}
          <span className="text-center font-semibold text-lg">Bill From</span>
          <Input type="text" label="Street Adress" />
          <div className="flex gap-2 md:gap-10">
            <Input type="text" label="City" />
            <Input type="text" label="Post Code" />
            <Input type="text" label="Country" />
          </div>

          {/* Bill To */}
          <span className="text-center font-semibold text-lg">Bill To</span>

          <Input type="text" label="Client's Name" />
          <Input type="email" label="Client's Email" />
          <Input type="text" label="Street Adress" />
          <div className="flex gap-2 md:gap-10">
            <Input type="text" label="City" />
            <Input type="text" label="Post Code" />
            <Input type="text" label="Country" />
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 f-col gap-4">
          <span className="text-center font-semibold text-lg">
            Invoice Detalis
          </span>
          <div className="flex gap-2 md:gap-10 justify-between">
            <div className="flex-1">
              <Input type="date" label="Invoice Date" />
            </div>
            <div className="flex-1">
              <Input type="select" label="Payement Terms" />
            </div>
          </div>
          <Input type="text" label="Project Description" />
          <span className="text-center font-semibold text-lg">
            Product List
          </span>
          <div className="flex items-center gap-2">
            <Input type="select" label="Product" />
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
    </AppSkeleton>
  );
};

export default NewInvoice;
