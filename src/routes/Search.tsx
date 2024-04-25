import BeatItem from "../components/BeatItem";
import Container from "../components/layout/Container";
import { useSearchPostsQuery } from "../features/posts/postSlice";
import { Post } from "../types/postTypes";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useIntersectionObserver } from "usehooks-ts";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ui/ErrorFallback";
import usePageSlice from "../hooks/usePageSlice";
import { useAppDispatch } from "../hooks/useTypedSelectorHook";
import { searchpostPageIncrement as PageIncrement } from "../features/posts/pageSlice";
import ContainerGrid from "../components/layout/ContainerGrid";
import SideContainer from "../components/layout/SideContainer";
import PageMainContainer from "../components/layout/PageMainContainer";
import { SortAndView } from "./SortAndView";
import BeatItemsContainer from "../components/layout/BeatItemsContainer";
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const { searchPage: page } = usePageSlice();
  const dispatch = useAppDispatch();
  // const [page, setPage] = useState(10);
  const { isIntersecting, ref: lastref } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isIntersecting) {
      // setPage((prev) => prev + 10);
      dispatch(PageIncrement(1));
    }
  }, [isIntersecting]);

  const location = useLocation();
  // console.log(location);
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("q") ?? "";

  // console.log(search);

  // const emptyObject = {}; // to prevent recreating the array when callback is called,
  // const { posts, isFetching, isLoading, isError, error } = useGetPostsQuery(
  //   { page: page },
  //   {
  //     selectFromResult: ({
  //       data,
  //       isLoading,
  //       isSuccess,
  //       isError,
  //       error,
  //       isFetching,
  //     }) => ({
  //       posts: data, // use usememo if u try to filter or sth
  //       //u can return other i.e is loading
  //       isFetching,
  //       isLoading,
  //       isError,
  //       error,
  //     }),
  //   }
  // );

  //this is for if you want to access page via queryparam
  // const page =
  // queryParams.get("page") === null
  //   ? 1
  //   : parseInt(queryParams.get("page") as string);

  // useEffect(() => {

  //   console.log(`page is ${page}`);

  //   if (isIntersecting) {
  //     page && search === ""
  //       ? navigate(`/search?page=${page + 1}`)
  //       : navigate(`/search?q=${search}&page=${page + 1}`);
  //   }
  // }, [isIntersecting]);

  const {
    data: postresponse,
    isLoading,
    isSuccess,
    isError,
    error,
    isFetching,
    refetch,
  } = useSearchPostsQuery({ page, search });

  const posts = postresponse?.loadedposts;

  // console.log(posts);

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

  // console.log(posts);
  // if (posts !== undefined) {
  //   console.log(Object.values(posts.data.entities));
  // }

  return (
    <Container>
      <ContainerGrid>
        <SideContainer>
          <div>
            <h1 className=" font-semibold text-lg">Categories</h1>
          </div>
          <div>
            <h1 className=" font-semibold text-lg mt-28">Filters</h1>
          </div>
        </SideContainer>
        <PageMainContainer>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Tracks</h1>
            <SortAndView></SortAndView>
          </div>
          {isLoading || (isFetching && <LoadingSpinner></LoadingSpinner>)}
          {/* <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => setPage(10)}
              resetKeys={[page]}
            >
              <BeatItem postId={1} view={"list"}></BeatItem>
            </ErrorBoundary> */}

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
          {/* {isError && (
            <div className="">
              <p>Something went wrong:</p>
              <pre style={{ color: "red" }}>error</pre>
              <button onClick={() => refetch()}>Try again</button>
            </div>
          )} */}
          {/* {ispostdefined &&
              posts.posts.map((post: any) => (
                <BeatItem key={post.id} view={"list"}></BeatItem>
              ))} */}
        </PageMainContainer>
      </ContainerGrid>
    </Container>
  );
};
export default Search;
