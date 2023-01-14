import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Input = (props) => {
  const [visible, setVisible] = useState(false);

  const inputStyle =
    "w-full px-4 py-3 text-brown text-sm border-2 border-brown-100 rounded-lg placeholder:text-brown-100";

  return (
    <div className="f-col text-brown gap-1">
      <label htmlFor={props.label} className="font-normal text-sm">
        {props.label}
      </label>

      {props.type === "password" ? (
        <div className="relative">
          <input
            {...props}
            type={visible ? "text" : "password"}
            className={`${inputStyle} ${
              props.disabled && "opacity-80 cursor-not-allowed"
            }`}
          />
          <span
            className="w-4 absolute right-4 top-4 cursor-pointer"
            onClick={() => setVisible(!visible)}
          >
            {visible ? <EyeSlashIcon /> : <EyeIcon />}
          </span>
        </div>
      ) : (
        <input
          {...props}
          className={`${inputStyle} ${
            props.disabled && "opacity-80 cursor-not-allowed"
          }`}
        />
      )}

      <span className="text-xs md:text-sm text-error font-normal">
        {props.error}
      </span>
    </div>
  );
};

export default Input;
