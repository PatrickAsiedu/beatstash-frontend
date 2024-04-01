import { IoPauseCircleOutline } from "react-icons/io5";
import { IoPlayCircleOutline } from "react-icons/io5";

function PlayButton(props: any) {
  return (
    <button onClick={props.onPlayChangeHandler}>
      {props.isPlaying ? (
        <IoPauseCircleOutline fontSize={"3rem"}></IoPauseCircleOutline>
      ) : (
        <IoPlayCircleOutline fontSize={"3rem"}></IoPlayCircleOutline>
      )}
    </button>
  );
}

export default PlayButton;
