import { UserIcon, PencilIcon } from "@heroicons/react/24/outline";
import Input from "../shared/Input";

const CustomerForm = () => {
  return (
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
          <Input label="Name" type="text" />
          <Input label="Email" type="email" />
          <div>
            <Input label="Street Adress" type="text" />
            <Input label="City" type="text" />
          </div>
        </div>

        <div className="flex-1">
          <Input label="Full Name" type="text" />
          <Input label="Phone Number" type="tel" />
          <div>
            <Input label="Post Code" type="text" />
            <Input label="Country" type="text" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CustomerForm;
