import { UserIcon, PencilIcon } from "@heroicons/react/24/outline";
import Input from "../shared/Input";

const CustomerForm = ({ data }) => {
  const [customer] = data ? data : [null];

  return (
    <>
      {customer ? (
        <form className="md:w-3/4 text-brown f-col gap-8 ">
          {/* Profile Picture */}
          <div className="pt-4 md:pt-0 f-center gap-4">
            <div className="relative cursor-pointer">
              <UserIcon className="w-16 md:w-20 border-2 md:border-4 border-brown rounded-full p-2 " />
              <span>
                <PencilIcon className="absolute w-5 md:w-6 top-3 -left-1 bg-brown text-white rounded-full p-1" />
                <input
                  type="file"
                  accept=".jpg,.png,.jpeg,.gif"
                  className="absolute w-full h-full top-0 cursor-pointer opacity-0 text-[0px]"
                />
              </span>
            </div>
            <h2 className="text-xl">Profile Picture</h2>
          </div>

          {/* Form */}
          <div className="md:flex md:gap-14">
            <div className="flex-1">
              <Input label="Name" type="text" defaultValue={customer?.name} />
              <Input label="Email" type="email" defaultValue={customer.email} />
              <div>
                <Input
                  label="Street Adress"
                  type="text"
                  defaultValue={customer.street}
                />
                <Input label="City" type="text" defaultValue={customer.city} />
              </div>
            </div>

            <div className="flex-1">
              <Input
                label="Full Name"
                type="text"
                defaultValue={customer.fullName}
              />
              <Input
                label="Phone Number"
                type="tel"
                defaultValue={customer.phone}
              />
              <div>
                <Input
                  label="Post Code"
                  type="text"
                  defaultValue={customer.zip}
                />
                <Input
                  label="Country"
                  type="text"
                  defaultValue={customer.country}
                />
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className="w-full h-full f-center">
          <h1 className="">No Customer Found :(</h1>
        </div>
      )}
    </>
  );
};
export default CustomerForm;
