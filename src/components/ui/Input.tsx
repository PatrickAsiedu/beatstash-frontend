import { forwardRef } from "react";

type InputProps = {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type inputref = HTMLInputElement;
export const Input = forwardRef<inputref, InputProps>((props, ref) => {
  const { name, type, label, placeholder, onChangeHandler } = props;
  return (
    <div className="w-full ">
      <label htmlFor={name} className=" text-xs">
        {label}
      </label>
      <input
        type="text"
        name="username"
        className="w-full border rounded-md bg-input-dark px-2 py-2 placeholder:font-normal placeholder:text-text-dark font-normal text-sm  "
        placeholder={placeholder}
        onChange={onChangeHandler}
        ref={ref}
      />
    </div>
  );
});
