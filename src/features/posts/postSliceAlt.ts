import { apiSlice } from "../api/apiSlice";
import { Post } from "../../types/postTypes";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import type { EntityAdapter, EntityState } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

//transform our data to normalized form { ids: [], entities: {} }
//as best prac to prevent looping through all data to find just 1

//pass sort functions to obj to sort on normalized data
const postsAdapter = createEntityAdapter<Post>({});

const initialState = postsAdapter.getInitialState();

interface PostResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  posts: Post[];
}

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //return type and args type
    getPosts: builder.query<EntityState<Post>, number>({
      query: (page = 10) => `posts?limit=10&skip=${page}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry

      merge: (currentCache, newItems) => {
        // console.log(newItems.posts);
        // currentCache.posts.push(...newItems.posts);
        postsAdapter.addMany(currentCache, postsSelectors.selectAll(newItems));
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      //transform data before caching
      //@ts-ignore
      transformResponse: (responseData: PostResponse) => {
        //any other transformation goes here
        const loadedposts = responseData.posts;
        return postsAdapter.setAll(initialState, loadedposts);
      },

      //@ts-ignore
      providesTags: (result, error, page) =>
        result !== undefined
          ? [
              // Provides a tag for each post in the current page,
              // as well as the 'PARTIAL-LIST' tag.

              ...result.ids.map((id) => ({
                type: "Posts",
                id,
              })),
              { type: "Posts", id: "PARTIAL-LIST" },
            ]
          : [{ type: "Posts", id: "PARTIAL-LIST" }],
      //use these tags to refetch either post list or individual post based on inviladte tag
      // providesTags: [{ type: "Posts", id: "PARTIAL-LIST" }],
    }),
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
      providesTags: (result, error, arg) => [{ type: "Post", id: arg }], //use this tag to invalidate cache & refetch this post when invalidated by another endpoint
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
        method: "POST",
        BODY: initialPost,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }], //refetch endpoints that have the posts lists on addnewpost
    }),
  }),
});

const postsSelectors = postsAdapter.getSelectors();

export const { useGetPostsQuery } = postApiSlice;
