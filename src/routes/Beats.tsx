import React from "react";
import Container from "../components/layout/Container";
import ContainerGrid from "../components/layout/ContainerGrid";
import SideContainer from "../components/layout/SideContainer";
import PageMainContainer from "../components/layout/PageMainContainer";
import { useGetPostsQuery } from "../features/posts/postSlice";
import { Post } from "../types/postTypes";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { Suspense, useEffect, useState } from "react";

import { useIntersectionObserver } from "usehooks-ts";
import ErrorFallback from "../components/ui/ErrorFallback";
import usePageSlice from "../hooks/usePageSlice";
import { useAppDispatch } from "../hooks/useTypedSelectorHook";
import { postPageIncrement } from "../features/posts/pageSlice";
import BeatItem from "../components/BeatItem";
import { SortAndView } from "./SortAndView";
import BeatItemsContainer from "../components/layout/BeatItemsContainer";

const Beats = () => {
  const { postPage: page } = usePageSlice();
  const dispatch = useAppDispatch();
  // const [page, setPage] = useState(10);
  const { isIntersecting, ref: lastref } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isIntersecting) {
      // setPage((prev) => prev + 10);
      dispatch(postPageIncrement(1));
    }
  }, [isIntersecting]);

  const {
    data: postsresponse,
    isLoading,
    isSuccess,
    isError,
    error,
    isFetching,
    refetch,
  } = useGetPostsQuery(page);

  const posts = postsresponse?.loadedposts;

  isError && console.log(error);
  // if (isError) {
  //   // throw new Response("Bad Request", { status: 400 });
  //   //@ts-ignore
  //   throw new Error(error.data);
  // }

  // if (isLoading) {
  //   throw new Promise((resolve) => null);
  // }

  const ispostdefined = posts !== undefined;

  console.log(posts);
  // if (posts !== undefined) {
  //   console.log(Object.values(posts.data.entities));
  // }
  return (
    <Container>
      <div className="pt-4"></div>
      <PageMainContainer>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Tracks</h1>
          <SortAndView></SortAndView>
        </div>
        {isLoading && <LoadingSpinner></LoadingSpinner>}

        <BeatItemsContainer view={"list"}>
          {ispostdefined &&
            posts.ids?.map((postId, index) => (
              <BeatItem
                post={posts?.entities[postId] as Post}
                postId={postId as number}
                key={postId}
                ref={index === posts.ids.length - 1 ? lastref : null}
                view={"list"}
              ></BeatItem>
            ))}
        </BeatItemsContainer>

        {isLoading || (isFetching && <LoadingSpinner></LoadingSpinner>)}
        {isError && (
          <div className="">
            <p>Something went wrong:</p>
            <pre style={{ color: "red" }}>error</pre>
            <button onClick={() => refetch()}>Try again</button>
          </div>
        )}
      </PageMainContainer>
    </Container>
  );
};

export default Beats;
