import Container from "../layout/Container";
import { GoPlus } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineShoppingCart, MdPlayCircle, MdRepeat } from "react-icons/md";
import { MdOutlineMotionPhotosPause } from "react-icons/md";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { IoShuffle, IoVolumeHigh } from "react-icons/io5";
import { IoRepeat } from "react-icons/io5";
import { IoIosVolumeMute } from "react-icons/io";
import { IoIosVolumeLow } from "react-icons/io";
import { IoIosVolumeHigh } from "react-icons/io";
import { PiQueue } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";

const FloatingAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setisPlaying] = useState(false);

  // const audio = new Audio()

  useEffect(() => {
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
  }, [isPlaying, audioRef]);

  const onPlayChangeHandler = () => {
    setisPlaying((prev) => !prev);
  };

  return (
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
            <img
              src=""
              alt="art work"
              className="w-10 h-full rounded-md hidden md:flex"
            />
            <div className="text-xs md:text-base">
              <h2>Drake feat sibonasss</h2>
              <h1>ANAssii</h1>
            </div>
            <button className="hidden md:flex">
              <GoPlus fontSize={22}></GoPlus>
            </button>
            <button>
              <BsThreeDots></BsThreeDots>
            </button>
            <button className="hidden md:flex bg-primary rounded-md px-4 py-1 items-center space-x-2">
              <MdOutlineShoppingCart fontSize={"1rem"}></MdOutlineShoppingCart>
              <span>$29.8</span>
            </button>
          </div>
          <div className="flex space-x-3 md:space-x-5 items-center md:justify-center ">
            <button className="hidden md:flex">
              <IoShuffle
                fontSize={"1.2rem"}
                className="text-gray-400"
              ></IoShuffle>
            </button>
            <button>
              <MdSkipPrevious fontSize={"1.5rem"}></MdSkipPrevious>
            </button>
            <button onClick={onPlayChangeHandler}>
              {isPlaying ? (
                <MdOutlineMotionPhotosPause
                  fontSize={"3rem"}
                ></MdOutlineMotionPhotosPause>
              ) : (
                <IoPlayCircleOutline fontSize={"3rem"}></IoPlayCircleOutline>
              )}
            </button>
            <button>
              <MdSkipNext fontSize={"1.5rem"}></MdSkipNext>
            </button>
            <button className="hidden md:flex">
              <MdRepeat
                fontSize={"1.2rem"}
                className="text-gray-400 "
              ></MdRepeat>
            </button>
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
};
export default FloatingAudioPlayer;
