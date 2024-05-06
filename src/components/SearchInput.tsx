import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetSearchPage } from "../features/posts/pageSlice";
import { useAppDispatch } from "../hooks/useTypedSelectorHook";

type SearchInputProps = {
  variation: string;
};

const SearchInput = ({ variation }: SearchInputProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [search, setsearch] = useState("");
  const [searchCategory, setSearchCategory] = useState("tracks");
  const queryParams = new URLSearchParams();

  const onSubmitSeacrhHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(resetSearchPage());
    navigate(`/search?q=${search}`);
  };

  return (
    <form onSubmit={onSubmitSeacrhHandler} action="" className=" relative">
      <input
        onChange={(e) => setsearch(e.target.value)}
        type="text"
        placeholder={
          variation === "header"
            ? "What are you looking for ?"
            : `${"try drake type beat"}`
        }
        className={
          variation === "header"
            ? " bg-body-light w-54 lg:w-96 rounded-full py-3 px-4 border-[0.5px] text-xs border-neutral-500 absolute top-12 md:static focus:outline-none appearance-none placeholder:text-xs  placeholder:text-text-dark"
            : " bg-white w-full lg:w-[650px] py-[18px] lg:py-6  px-4 rounded-md text-xs   focus:outline-none appearance-none placeholder:text-xs  placeholder:text-text-dark"
        }
      />
      <select
        name="searchcategory"
        id="searchcategory"
        value={searchCategory}
        onChange={(e) => setSearchCategory(e.target.value)}
        className={
          variation === "header"
            ? "absolute top-2 right-4 bg-body-light text-text-dark "
            : `hidden`
        }
      >
        <option value="tracks" className="appearance-none">
          Tracks
        </option>
        <option value="members" className="appearance-none">
          Members
        </option>
      </select>
    </form>
  );
};

export default SearchInput;
