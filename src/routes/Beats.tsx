import React from "react";
import { useDispatch } from "react-redux";
import { launchPlayer } from "../features/player/audioplayerSlice";

const Beats = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(launchPlayer())}>Launch Player</button>
    </div>
  );
};

export default Beats;
