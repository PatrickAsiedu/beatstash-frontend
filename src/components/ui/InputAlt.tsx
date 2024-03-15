import React from "react";
type InputProps = {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  inputstyle: string;
  constyle: string;
  labelstyle: string;
  onChangeHandler: React.Dispatch<React.SetStateAction<string>>;
};

const InputAlt = ({
  name,
  type,
  label,
  placeholder,
  inputstyle,
  constyle,
  labelstyle,
  onChangeHandler,
}: InputProps) => {
  return (
    <div className={constyle}>
      <label htmlFor={name} className={labelstyle}>
        {label}
      </label>
      <input
        type="text"
        name="username"
        className={inputstyle}
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};
export default InputAlt;
