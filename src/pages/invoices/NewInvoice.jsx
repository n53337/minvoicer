import Input from "../../components/shared/Input";
import AppSkeleton from "../../components/shared/AppSkeleton";

const NewInvoice = () => {
  return (
    <AppSkeleton>
      <form>
        {/* Data */}
        <div>
          {/* Bill From */}
          <aside>Bill From</aside>
          <Input type="text" label="Street Adress" />
          <div>
            <Input type="text" label="City" />
            <Input type="text" label="Post Code" />
            <Input type="text" label="Country" />
          </div>

          {/* Bill To */}
          <aside>Bill To</aside>

          <Input type="text" label="Client's Name" />
          <Input type="email" label="Client's Email" />
          <Input type="text" label="Street Adress" />
          <div>
            <Input type="text" label="City" />
            <Input type="text" label="Post Code" />
            <Input type="text" label="Country" />
          </div>
        </div>

        {/* Details */}
        <div>
          <span>Invoice Detalis</span>
          <div>
            <Input type="date" label="Invoice Date" />
            <Input type="select" label="Payement Terms" />
          </div>
          <Input type="text" label="Project Description" />
          <span>Product List</span>
          <div>
            <Input type="select" label="Product" />
            <Input type="number" label="Qty." />
            <Input type="number" label="Price" />
            <Input type="text" label="Total" />
          </div>
          <div>Add New Product</div>
        </div>
      </form>
    </AppSkeleton>
  );
};

export default NewInvoice;
