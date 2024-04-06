import { HiOutlineViewList } from "react-icons/hi";
import { IoGridOutline } from "react-icons/io5";

export function SortAndView() {
  return (
    <div className="flex space-x-5 items-center">
      <h2>Sorty by</h2>
      <div className="flex bg-studiobody">
        <button className="border border-border-light p-2">
          <HiOutlineViewList></HiOutlineViewList>
        </button>
        <button className="border border-border-light p-2">
          <IoGridOutline></IoGridOutline>
        </button>
      </div>
    </div>
  );
}
