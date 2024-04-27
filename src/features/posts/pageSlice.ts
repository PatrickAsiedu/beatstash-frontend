import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postPage: 1,
  searchPage: 1,
  location: "",
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    postPageIncrement: (state, action) => {
      state.postPage = state.postPage + action.payload;
    },
    searchpostPageIncrement: (state, action) => {
      state.searchPage = state.searchPage + action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { postPageIncrement, searchpostPageIncrement, setLocation } =
  pageSlice.actions;

export default pageSlice.reducer;
