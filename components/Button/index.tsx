import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ type, text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:bg-red-500"
    >
      {text}
    </button>
  );
};

export default Button;
