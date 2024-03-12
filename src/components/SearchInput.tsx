type SearchInputProps = {
  variation: string;
};

const SearchInput = ({ variation }: SearchInputProps) => {
  return (
    <input
      type="search"
      placeholder={
        variation === "header"
          ? "What are you looking for ?"
          : `${"try drake type beat"}`
      }
      className={
        variation === "header"
          ? " bg-body-light w-54 lg:w-96 rounded-full py-[10px] px-4 border-[0.5px] text-xs border-neutral-500 absolute top-10 md:static focus:outline-none appearance-none placeholder:text-xs  placeholder:text-text-dark"
          : " bg-white w-full lg:w-[650px] py-[18px] lg:py-6  px-4 rounded-md text-xs   focus:outline-none appearance-none placeholder:text-xs  placeholder:text-text-dark"
      }
    />
  );
};

export default SearchInput;
