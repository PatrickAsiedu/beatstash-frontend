import BeatItem from "../components/BeatItem";
import Container from "../components/layout/Container";
import { HiOutlineViewList } from "react-icons/hi";
import { IoGridOutline } from "react-icons/io5";
import { useGetPostsQuery } from "../features/posts/postSlice";
import { Post } from "../types/postTypes";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const Search = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  isError && console.log(error);
  const ispostdefined = posts !== undefined;
  console.log(ispostdefined);
  // if (posts !== undefined) {
  //   console.log(Object.values(posts.entities));
  // }

  return (
    <Container>
      <div className="pt-4 lg:grid lg:grid-cols-5 gap-6 ">
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
          {/* <LoadingSpinner></LoadingSpinner> */}
          {ispostdefined &&
            posts.ids?.map((postId) => (
              <BeatItem key={postId} view={"list"}></BeatItem>
            ))}
        </main>
      </div>
    </Container>
  );
};
export default Search;
