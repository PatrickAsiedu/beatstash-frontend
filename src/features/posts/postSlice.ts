import { apiSlice } from "../api/apiSlice";
import { Post } from "../../types/postTypes";
import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import type { EntityAdapter, EntityState } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

//transform our data to normalized form { ids: [], entities: {} }
//as best prac to prevent looping through all data to find just 1

//pass sort functions to obj to sort on normalized data
const postsAdapter = createEntityAdapter<Post>({});
const searchpostsAdapter = createEntityAdapter<Post>({});

const postsInitialState = postsAdapter.getInitialState();
const searchInitialState = searchpostsAdapter.getInitialState();

interface PostResponse {
  page: number;
  perPage: number;
  total: number;
  total_pages: number;
  posts: Post[];
}

interface PostReturn {
  page: number;
  perPage: number;
  total: number;
  total_pages: number;
  loadedposts: EntityState<Post>;
}

type PostQueryParams = {
  page: number;
  search?: string;
  key?: string;
  bpm?: string;
  genres?: string;
};

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //return type and args type
    getPosts: builder.query<PostReturn, PostQueryParams>({
      query: ({ key, bpm, genres, page = 1 }) =>
        `beats?page=${page}&key=${key}&bpm=${bpm}genres=${genres}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry

      merge: (currentCache, newItems) => {
        // console.log(newItems.posts);
        // currentCache.posts.push(...newItems.posts);
        currentCache.page = newItems.page;
        currentCache.perPage = newItems.perPage;
        currentCache.total = newItems.total;
        currentCache.total_pages = newItems.total_pages;
        currentCache.loadedposts = postsAdapter.addMany(
          currentCache.loadedposts,
          postsSelectors.selectAll(newItems.loadedposts)
        );
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      //transform data before caching
      //@ts-ignore
      transformResponse: (responseData: PostResponse) => {
        //any other transformation goes here
        const { page, perPage, total, total_pages, posts } = responseData;
        // console.log(loadedposts);
        const loadedposts = postsAdapter.setAll(postsInitialState, posts);

        return { page, perPage, total, total_pages, loadedposts };
      },

      //@ts-ignore

      //use these tags to refetch either post list or individual post based on inviladte tag
      providesTags: [{ type: "Posts", id: "PARTIAL-LIST" }],
    }),

    searchPosts: builder.query<PostReturn, PostQueryParams>({
      query: ({ page, search = "" }) => `beats?search=${search}&page=${page}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },

      merge: (currentCache, newItems, args) => {
        const { page } = args.arg; //we can use this managing page state with query params

        currentCache.page = newItems.page;
        currentCache.perPage = newItems.perPage;
        currentCache.total = newItems.total;
        currentCache.total_pages = newItems.total_pages;

        if (newItems.page === 1) {
          currentCache.loadedposts = searchpostsAdapter.setAll(
            currentCache.loadedposts,
            postsSelectors.selectAll(newItems.loadedposts)
          );
        } else {
          currentCache.loadedposts = searchpostsAdapter.addMany(
            currentCache.loadedposts,
            postsSelectors.selectAll(newItems.loadedposts)
          );
        }
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      //transform data before caching
      //@ts-ignore
      transformResponse: (responseData: PostResponse) => {
        //any other transformation goes here
        const { page, perPage, total, total_pages, posts } = responseData;
        // console.log(loadedposts);
        const loadedposts = searchpostsAdapter.setAll(
          searchInitialState,
          posts
        );

        return { page, perPage, total, total_pages, loadedposts };
      },

      //@ts-ignore
      providesTags: [{ type: "Post", id: "PARTIAL-LIST" }],
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
    updatePost: builder.mutation({
      query: (initialPost) => ({
        url: `/posts/${initialPost.id}`,
        method: "PUT",
        body: {
          ...initialPost,
          date: new Date().toISOString(),
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Post", id: arg.id },
        { type: "Post", id: "LIST" },
      ],
    }),
    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Post", id: arg.id },
        { type: "Post", id: "LIST" },
      ],
    }),
  }),
});

const postsSelectors = postsAdapter.getSelectors();

export const { useGetPostsQuery, useSearchPostsQuery } = postApiSlice;
