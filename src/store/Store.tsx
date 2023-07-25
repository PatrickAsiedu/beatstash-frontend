import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: { auth: authReducer },
});


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


export default store;