import { FiMenu } from "react-icons/fi";
import Container from "./Container";
import { Link } from "react-router-dom";
import Profile from "../ui/Profile";

const Header = () => {
  return (
    <header className="   py-4  fixed top-0 left-0 w-full px-4  flex justify-between items-center bg-studiobody z-50 ">
      <div className="relative flex ">
        <button
          className="
            lg:hidden mr-3"
        >
          <FiMenu fontSize={"medium"}></FiMenu>
        </button>

        <Link to="/">
          <img
            className="mr-4 w-6"
            src="https://www.beatstars.com/assets/img/bs-logos/bs-logo-red.svg"
            alt=""
          />
        </Link>
      </div>
      <Profile></Profile>
    </header>
  );
};

export default Header;
