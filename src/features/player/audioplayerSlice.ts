import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/Store";
import { useAppSelector } from "../../hooks/useTypedSelectorHook";

const initialState = {
  isLaunched: false,
};

const audioplayerSlice = createSlice({
  name: "audioplayer",
  initialState,
  reducers: {
    launchPlayer: (state) => {
      state.isLaunched = !state.isLaunched;
    },
  },
});
export const { launchPlayer } = audioplayerSlice.actions;

export default audioplayerSlice.reducer;
