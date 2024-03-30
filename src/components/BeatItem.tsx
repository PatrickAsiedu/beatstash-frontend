import { IoPlayCircleOutline } from "react-icons/io5";
import CartButton from "./ui/CartButton";
import { MoreOptionsButton } from "./ui/MoreOptionsButton";
import { IoIosPlay } from "react-icons/io";
import { IoMdPlayCircle } from "react-icons/io";
import { forwardRef } from "react";

type Props = { view: string };
type Ref = HTMLDivElement;
const BeatItem = forwardRef<Ref, Props>((props, ref) => {
  // throw new Error("heyyy");
  const { view } = props;
  return (
    <div
      ref={ref}
      className={
        view === "list"
          ? "group w-full py-3 hover:bg-bodyvar1 flex items-center justify-between px-4 rounded-md"
          : view === "box"
          ? "w-72 h-80 hover:bg-bodyvar1 p-4 rounded-md"
          : ""
      }
    >
      <div
        className={
          view === "list"
            ? "flex items-center space-x-4 "
            : view === "box"
            ? ""
            : ""
        }
      >
        <button className="group-hover:block">
          <IoIosPlay fontSize={"1.5rem"} className=""></IoIosPlay>
        </button>
        <div className="w-10 h-full rounded-md hidden md:flex ">
          <img
            src="https://beatstash.s3.eu-north-1.amazonaws.com/neom-rVC6O_gDE0Q-unsplash.jpg"
            alt="art work"
            className={view === "list" ? "" : view === "box" ? "" : ""}
          />
        </div>
        <div
          className={
            view === "list" ? "text-xs md:text-base" : view === "box" ? "" : ""
          }
        >
          <h2>Drake feat sibonasss</h2>
          <h1>ANAssii</h1>
        </div>
      </div>
      <div
        className={
          view === "list" ? "flex space-x-3 " : view === "box" ? "" : ""
        }
      >
        <CartButton></CartButton>
        <MoreOptionsButton></MoreOptionsButton>
      </div>
    </div>
  );
});
export default BeatItem;
