import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let baseUrl;

process.env.NODE_ENV === "development"
  ? (baseUrl = "http://localhost:3500")
  : (baseUrl = "https://beatstashserver.onrender.com");

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({}),
});
