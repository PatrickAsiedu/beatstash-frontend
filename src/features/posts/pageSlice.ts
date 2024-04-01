import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    pageIncrement: (state, action) => {
      state.page = state.page + action.payload;
    },
  },
});

export const { pageIncrement } = pageSlice.actions;

export default pageSlice.reducer;
