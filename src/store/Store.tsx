import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { apiSlice } from "../features/api/apiSlice";
import audioplayerReducer from "../features/player/audioplayerSlice";
import pageReducer from "../features/posts/pageSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    audioplayerReducer,
    pageReducer,

    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
