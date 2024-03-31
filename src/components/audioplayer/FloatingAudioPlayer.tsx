import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import useAudioPlayerisLaunched from "../../hooks/useAudiodioPlayerisLaunched";
import Container from "../layout/Container";
import { GoPlus } from "react-icons/go";
import { MdPlayCircle } from "react-icons/md";

import { IoVolumeHigh } from "react-icons/io5";
import { IoRepeat } from "react-icons/io5";
import { IoIosVolumeMute } from "react-icons/io";
import { IoIosVolumeLow } from "react-icons/io";
import { IoIosVolumeHigh } from "react-icons/io";
import { PiQueue } from "react-icons/pi";
import CartButton from "../ui/CartButton";
import { MoreOptionsButton } from "../ui/MoreOptionsButton";
import { useGetPostsQuery } from "../../features/posts/postSlice";
import PlayButton from "./PlayButton";
import { ShuffleButtton } from "./ShuffleButtton";
import { PreviousButton } from "./PreviousButton";
import { NextButton } from "./NextButton";
import { RepeatButton } from "./RepeatButton";

const FloatingAudioPlayer = () => {
  const { isLaunched, postId } = useAudioPlayerisLaunched();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setisPlaying] = useState(false);
  const [index, setIndex] = useState<number>(NaN);
  const [currentSong, setCurrentSong] = useState({});

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
    isFetching,
  } = useGetPostsQuery(10);

  // console.log(isLaunched);

  // const audio = new Audio()
  // console.log(posts);

  useEffect(() => {
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
  }, [isPlaying, audioRef]);

  // useEffect(() => {
  //   console.log(currentSong);
  //   console.log(index);
  // }, [currentSong, index]);

  // useEffect(() => {
  //   if (isLaunched && postId) {
  //     console.log(" irun");
  //     setCurrentSong(posts?.entities[postId] ?? {});
  //     setIndex(posts?.ids.indexOf(postId) ?? 0);
  //   }
  //   console.log("outta loop");
  // }, []);

  const onPlayChangeHandler = () => {
    setisPlaying((prev) => !prev);
    setCurrentSong(posts?.entities[postId] ?? {});
    setIndex(posts?.ids.indexOf(postId) ?? 0);
    console.log(currentSong);
    console.log(index);
  };

  const onNextButtonHandler = () => {
    // setCurrentSong(posts?.entities[posts?.ids[index]] ?? {});

    if (posts !== undefined && index > posts?.ids.length - 1) {
      setIndex(0);
      setCurrentSong(posts?.entities[posts?.ids[index]] ?? {});
    } else {
      setIndex((prev) => prev + 1);
      setCurrentSong(posts?.entities[posts?.ids[index]] ?? {});
    }
    console.log(currentSong);
    console.log(index);
  };

  const onPreviousButtonHandler = () => {
    // setCurrentSong(posts?.entities[posts?.ids[index]] ?? {});
    console.log(currentSong);
    console.log(index);
    if (posts !== undefined && index < 0) {
      setIndex(posts.ids.length - 1);
      setCurrentSong(posts?.entities[posts?.ids[index]] ?? {});
    } else {
      setIndex((prev) => prev - 1);
      setCurrentSong(posts?.entities[posts?.ids[index]] ?? {});
    }
  };

  const content = (
    <div className="w-full  fixed bottom-0 bg-body z-50  py-2 ">
      <audio
        src="https://beatstash.s3.eu-north-1.amazonaws.com/01GingerMe.mp3"
        ref={audioRef}
      ></audio>
      <Container>
        {/* <div className="h-[2px] w-full bg-slate-800 ">
  <div className=" bg-white w-[70%] h-full rounded-md "></div>
</div> */}
        <progress
          max="100"
          value="80"
          className="w-full mx-auto h-[2px] bg-white absolute top-0 left-0"
        ></progress>
        <div className="flex md:grid md:grid-cols-3 ">
          <div className="flex items-center space-x-5 ">
            <div className="w-10 h-full rounded-md hidden md:flex">
              <img src="" alt="art work" className="" />
            </div>
            <div className="text-xs md:text-base">
              <h2>Drake feat sibonasss</h2>
              <h1>ANAssii</h1>
            </div>
            <button className="hidden md:flex">
              <GoPlus fontSize={22}></GoPlus>
            </button>
            <MoreOptionsButton></MoreOptionsButton>
            <CartButton></CartButton>
          </div>
          <div className="flex space-x-3 md:space-x-5 items-center md:justify-center ">
            <ShuffleButtton></ShuffleButtton>
            <PreviousButton
              onPreviousButtonHandler={onPreviousButtonHandler}
            ></PreviousButton>
            <PlayButton
              isPlaying={isPlaying}
              onPlayChangeHandler={onPlayChangeHandler}
            ></PlayButton>
            <NextButton onNextButtonHandler={onNextButtonHandler}></NextButton>
            <RepeatButton></RepeatButton>
          </div>
          <div className=" hidden md:flex items-center space-x-5  md:justify-end">
            <button>
              <IoVolumeHigh fontSize={"1.5rem"}></IoVolumeHigh>
            </button>
            <input type="range" className=" appearance-none" />
            {/* <div className="w-20 h-[2px] bg-white"></div> */}
            <button>
              <PiQueue fontSize={"1.5rem"}></PiQueue>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );

  return (
    <>
      {isLaunched &&
        createPortal(
          content,
          document.getElementById("audio-player") as HTMLElement
        )}
    </>
  );
};
export default FloatingAudioPlayer;
