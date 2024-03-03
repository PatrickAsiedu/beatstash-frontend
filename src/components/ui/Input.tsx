import React from "react";

type InputProps = {
  name: string;
  type: string;
  label: string;
  placeholder: string;
};

export function Input({ name, type, label, placeholder }: InputProps) {
  return (
    <div className="w-full ">
      <label htmlFor="" className=" text-xs">
        {label}
      </label>
      <input
        type="text"
        name="username"
        className="w-full border rounded-md bg-input-dark px-2 py-2 placeholder:font-normal placeholder:text-text-dark font-normal text-sm  "
        placeholder={placeholder}
      />
    </div>
  );
}
