import { apiSlice } from "../api/apiSlice";
import { User } from "../../types/userTypes";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
    getUser: builder.query<User, string>({
      query: (userName) => `/users/${userName}`,
    }),
  }),
});

export const { useGetUserQuery } = userApiSlice;
