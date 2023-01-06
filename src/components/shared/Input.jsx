import { Link } from "react-router-dom";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Input = ({ type, label, required, placeHolder, error }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="f-col text-brown">
      <label htmlFor={label} className="font-normal text-sm">
        {label}
      </label>

      {type === "password" ? (
        <div className="relative">
          <input
            type="password"
            id={label}
            placeholder={placeHolder}
            required={required}
            className="w-full px-4 py-3 text-brown text-sm border-2 border-brown-100 rounded-lg placeholder:text-brown-100"
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
          type={type}
          id={label}
          placeholder={placeHolder}
          required={required}
          className="px-4 py-3 text-brown text-sm border-2 border-brown-100 rounded-lg placeholder:text-brown-100"
        />
      )}

      <span className="text-xs text-error font-light">{error}</span>
    </div>
  );
};

export default Input;
