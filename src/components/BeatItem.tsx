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

type Props = { view?: string; postId: number; post: Post };
type Ref = HTMLDivElement;
const BeatItem = forwardRef<Ref, Props>((props, ref) => {
  const { view, postId, post } = props;
  const page = usePageSlice();

  // const emptyObject = {}; // to prevent recreating the array when callback is called,
  // const { post }: { post: Post | {} } = useGetPostsQuery(
  //   { page },
  //   {
  //     selectFromResult: ({
  //       data,
  //       isLoading,
  //       isSuccess,
  //       isError,
  //       error,
  //       isFetching,
  //     }) => ({
  //       post: data?.entities[postId] ?? emptyObject, // use usememo if u try to filter or sth
  //       //u can return other i.e is loading
  //       isFetching,
  //     }),
  //   }
  // );

  // const {
  //   data: posts,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error,
  //   isFetching,
  // } = useGetPostsQuery({ page });

  // const post = posts?.entities[postId];

  // console.log(isFetching);

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
              alt="artwork"
              className={view === "list" ? "" : view === "box" ? "" : ""}
            />
          </div>
          <div className="text-xs md:text-base">
            <h2>{(post as Post).title}</h2>
            <h1>ANAssii</h1>
          </div>
        </div>
        <div className="flex space-x-3 ">
          <CartButton></CartButton>
          <MoreOptionsButton></MoreOptionsButton>
        </div>
      </div>
    ) : view === "box" ? (
      <div className="cursor-pointer  hover:bg-bodyvar1   group h-[24rems] p-4 rounded-md">
        <div className="relative  flex items-center justify-center rounded-lg w-full h-52">
          <img
            className=" object-cover object-center w-full h-full rounded-lg"
            src="https://beatstash.s3.eu-north-1.amazonaws.com/neom-rVC6O_gDE0Q-unsplash.jpg"
            alt="artwork"
          />{" "}
          <button
            onClick={() => dispatch(launchPlayer(postId))}
            className="absolute opacity-0 group-hover:opacity-100"
          >
            <IoIosPlay fontSize={"3rem"} className=""></IoIosPlay>
          </button>
        </div>
        <div className="flex mt-4 justify-between">
          <button className="text-primary">$4.3</button>
          <h2 className="text-text-dark">160BPM</h2>
        </div>
        <h1 className="font-semibold mt-1">FALLEN HERE OKAY</h1>
        <h2 className="text-text-dark mt-1">Excatsy</h2>
      </div>
    ) : (
      <p></p>
    );

  return content;
});
export default BeatItem;
