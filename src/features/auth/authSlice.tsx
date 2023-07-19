import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../network/api";

const initialState = {
  user: null,
  isLoading: false,
  success: false,
  error: "",
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, thunkAPI) => {
    try {
      const response = await api.post("login", user);
      return response.data;
    } catch (err) {
      if (err instanceof Error) return err.message;
      else {
        console.log("unexpected error", err);
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      if (action.error.message !== undefined) {
        state.error = action.error.message;
      } else {
        console.log(state.error);
      }
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
