import { MdSkipPrevious } from "react-icons/md";

export function PreviousButton({ onPreviousButtonHandler }: any) {
  return (
    <button onClick={onPreviousButtonHandler}>
      <MdSkipPrevious fontSize={"1.5rem"}></MdSkipPrevious>
    </button>
  );
}
