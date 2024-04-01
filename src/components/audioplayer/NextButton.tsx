import { MdSkipNext } from "react-icons/md";

export function NextButton({ onNextButtonHandler }: any) {
  return (
    <button onClick={onNextButtonHandler}>
      <MdSkipNext fontSize={"1.5rem"}></MdSkipNext>
    </button>
  );
}
