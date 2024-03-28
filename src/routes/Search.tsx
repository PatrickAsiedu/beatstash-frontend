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

const Search = () => {
  const [page, setPage] = useState(10);
  const { isIntersecting, ref: lastref } = useIntersectionObserver({
    threshold: 0.5,
  });

  console.log(isIntersecting);
  console.log(page);

  useEffect(() => {
    if (isIntersecting) {
      setPage((prev) => prev + 10);
    }
    // isIntersecting && setPage(page + 10);
    // console.log(isIntersecting);
    // console.log(page);
    console.log(`${isLoading} is loading`);
  }, [isIntersecting]);

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
    isFetching,
  } = useGetPostsQuery(page);

  console.log(`${isFetching} is fetching`);

  isError && console.log(error);
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
          {/* {isLoading && <LoadingSpinner></LoadingSpinner>} */}
          <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
            {ispostdefined &&
              posts.ids?.map((postId, index) => {
                if (index === posts.ids.length - 1) {
                  return (
                    <BeatItem
                      key={postId}
                      ref={lastref}
                      view={"list"}
                    ></BeatItem>
                  );
                }
                return <BeatItem key={postId} view={"list"}></BeatItem>;
              })}
          </Suspense>
          {/* {isLoading || (isFetching && <LoadingSpinner></LoadingSpinner>)} */}
          {/* {ispostdefined &&
            posts.posts.map((post: any) => (
              <BeatItem key={post.id} view={"list"}></BeatItem>
            ))} */}
          {/* <button onClick={() => setPage(page + 10)}>Load more</button> */}
        </main>
      </div>
    </Container>
  );
};
export default Search;
