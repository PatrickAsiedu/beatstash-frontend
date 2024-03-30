import BeatItem from "../components/BeatItem";
import Container from "../components/layout/Container";
import { HiOutlineViewList } from "react-icons/hi";
import { IoGridOutline } from "react-icons/io5";
import { useGetPostsQuery } from "../features/posts/postSlice";
import { Post } from "../types/postTypes";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useIntersectionObserver } from "usehooks-ts";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ui/ErrorFallback";

const Search = () => {
  const [page, setPage] = useState(10);
  const { isIntersecting, ref: lastref } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isIntersecting) {
      setPage((prev) => prev + 10);
    }
  }, [isIntersecting]);

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
    isFetching,
  } = useGetPostsQuery(page);

  isError && console.log(error);
  if (isError) {
    // throw new Response("Bad Request", { status: 400 });
    //@ts-ignore
    throw new Error(error.data);
  }

  const ispostdefined = posts !== undefined;

  // console.log(posts);
  // if (posts !== undefined) {
  //   console.log(Object.values(posts.data.entities));
  // }

  return (
    <Container>
      <div className="pt-4 lg:grid lg:grid-cols-5 gap-6 relative">
        <aside className="hidden lg:block bg-bodyvar1 h-screen w-full rounded-md"></aside>
        <main className=" col-span-4  ">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Tracks</h1>
            <div className="flex space-x-5">
              <h2>Sorty by</h2>
              <div className="flex bg-studiobody">
                <button className="border border-border-light p-2">
                  <HiOutlineViewList></HiOutlineViewList>
                </button>
                <button className="border border-border-light p-2">
                  <IoGridOutline></IoGridOutline>
                </button>
              </div>
            </div>
          </div>
          {isLoading && <LoadingSpinner></LoadingSpinner>}

          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => setPage(10)}
            resetKeys={[page]}
          >
            <BeatItem view={"list"}></BeatItem>
          </ErrorBoundary>

          {/* {ispostdefined &&
            posts.ids?.map((postId, index) => (
              <BeatItem
                key={postId}
                ref={index === posts.ids.length - 1 ? lastref : null}
                view={"list"}
              ></BeatItem>
            ))} */}

          {isLoading || (isFetching && <LoadingSpinner></LoadingSpinner>)}
          {/* {ispostdefined &&
            posts.posts.map((post: any) => (
              <BeatItem key={post.id} view={"list"}></BeatItem>
            ))} */}
        </main>
      </div>
    </Container>
  );
};
export default Search;
