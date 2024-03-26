import { apiSlice } from "../api/apiSlice";
import { Post } from "../../types/postTypes";
import { createEntityAdapter } from "@reduxjs/toolkit";
import type { EntityState } from "@reduxjs/toolkit";

//transform our data to normalized form { ids: [], entities: {} }
//as best prac to prevent looping through all data to find just 1

//pass sort functions to obj to sort on normalized data
const postsAdapter = createEntityAdapter<Post>({});

const initialState = postsAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //return type and args type
    getPosts: builder.query<EntityState<Post>, void>({
      query: () => "/posts",
      //transform data before chaching
      transformResponse: (responseData: Post[]) => {
        //any other transformation goes here

        return postsAdapter.setAll(initialState, responseData);
      },
      providesTags: ["Post"],
    }),
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
      providesTags: ["Post"],
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
        method: "POST",
        BODY: initialPost,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetPostsQuery } = extendedApiSlice;
