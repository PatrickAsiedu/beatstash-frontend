import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/Store";
import { useAppSelector } from "../../hooks/useTypedSelectorHook";

const initialState = {
  isLaunched: false,
  postId: NaN,
};

const audioplayerSlice = createSlice({
  name: "audioplayer",
  initialState,
  reducers: {
    launchPlayer: (state, action: PayloadAction<number>) => {
      state.isLaunched = true;
      state.postId = action.payload;
    },
  },
});
export const { launchPlayer } = audioplayerSlice.actions;

export default audioplayerSlice.reducer;
