import React from "react";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ name, label, value, onChange }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <input
        type={name}
        id={name}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
      />
    </div>
  );
};

export default Input;
