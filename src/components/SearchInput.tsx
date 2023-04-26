import React from "react";

type SearchInputProps = {
  variation: string;
};

const SearchInput = ({ variation }: SearchInputProps) => {
  return (
    <input
      type="search"
      placeholder="What are you looking for ?"
      className=" bg-body-light w-54 lg:w-96 rounded-full py-[10px] px-4 border-[0.5px] text-xs border-neutral-500 absolute top-10 md:static
       focus:outline-none appearance-none placeholder:text-xs  placeholder:text-text-dark"
    />
  );
};

export default SearchInput;
