import { IoShuffle } from "react-icons/io5";

export function ShuffleButtton() {
  return (
    <button className="hidden md:flex">
      <IoShuffle fontSize={"1.2rem"} className="text-gray-400"></IoShuffle>
    </button>
  );
}
