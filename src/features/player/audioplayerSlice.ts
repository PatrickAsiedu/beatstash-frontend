import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLaunched: false,
};

const audioplayerSlice = createSlice({
  name: "audioplayer",
  initialState,
  reducers: {
    // launchPlayer=(state,action) => {
    //     state=true
    // }
  },
});
