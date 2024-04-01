import { IoPlayCircleOutline } from "react-icons/io5";
import CartButton from "./ui/CartButton";
import { MoreOptionsButton } from "./ui/MoreOptionsButton";
import { IoIosPlay } from "react-icons/io";
import { IoMdPlayCircle } from "react-icons/io";
import { forwardRef } from "react";
import { useGetPostsQuery } from "../features/posts/postSlice";
import { Post } from "../types/postTypes";
import { useDispatch } from "react-redux";
import { launchPlayer } from "../features/player/audioplayerSlice";
import usePageSlice from "../hooks/usePageSlice";

type Props = { view: string; postId: number };
type Ref = HTMLDivElement;
const BeatItem = forwardRef<Ref, Props>((props, ref) => {
  const { view, postId } = props;
  const page = usePageSlice();

  const emptyArray: Post[] = []; // to prevent recreating the array when callback is called,
  const { posts } = useGetPostsQuery(page, {
    selectFromResult: ({
      data,
      isLoading,
      isSuccess,
      isError,
      error,
      isFetching,
    }) => ({
      posts: data?.entities[postId] ?? emptyArray, // use usememo if u try to filter or sth
      //u can return other i.e is loading
    }),
  });

  const dispatch = useDispatch();

  const content =
    view === "list" ? (
      <div
        onClick={() => dispatch(launchPlayer(postId))}
        ref={ref}
        className=" cursor-pointer group w-full py-3 hover:bg-bodyvar1 flex items-center justify-between px-4 rounded-md"
      >
        <div className="flex items-center space-x-4">
          <button
            onClick={() => dispatch(launchPlayer(postId))}
            className=" opacity-0 group-hover:opacity-100"
          >
            <IoIosPlay fontSize={"1.5rem"} className=""></IoIosPlay>
          </button>
          <div className="w-10 h-full rounded-md hidden md:flex ">
            <img
              src="https://beatstash.s3.eu-north-1.amazonaws.com/neom-rVC6O_gDE0Q-unsplash.jpg"
              alt="art work"
              className={view === "list" ? "" : view === "box" ? "" : ""}
            />
          </div>
          <div className="text-xs md:text-base">
            <h2>Drake feat sibonasss</h2>
            <h1>ANAssii</h1>
          </div>
        </div>
        <div className="flex space-x-3 ">
          <CartButton></CartButton>
          <MoreOptionsButton></MoreOptionsButton>
        </div>
      </div>
    ) : view === "box" ? (
      <div></div>
    ) : (
      <p></p>
    );

  return content;
});
export default BeatItem;
