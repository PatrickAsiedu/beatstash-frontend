import { MdRepeat } from "react-icons/md";

export function RepeatButton() {
  return (
    <button className="hidden md:flex">
      <MdRepeat fontSize={"1.2rem"} className="text-gray-400 "></MdRepeat>
    </button>
  );
}
