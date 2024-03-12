import SearchInput from "../SearchInput";
import Container from "./Container";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";

const Header = () => {
  return (
    <header className="   py-4 md:py-3  md:fixed top-0 w-full bg-body z-50 ">
      <Container>
        <div className="flex justify-between">
          <div className="relative flex">
            <button
              className="
            lg:hidden mr-3"
            >
              <FiMenu size={20}></FiMenu>
            </button>

            <Link to="/">
              <img
                className="mr-4 w-6"
                src="https://www.beatstars.com/assets/img/bs-logos/bs-logo-red.svg"
                alt=""
              />
            </Link>

            <SearchInput variation={"header"}></SearchInput>
          </div>
          <div className="flex space-x-4 lg:space-x-8 md:justify-evenly items-center text-text-dark text-xs font-normal">
            <Link to="/signup" className="">
              Sign up
            </Link>
            <Link to="/signin" className="hidden md:flex">
              Sign in
            </Link>
            <button className="hidden md:flex bg-primary px-4 py-2 rounded-md text-white">
              Start Selling
            </button>
            <button className="flex">
              <MdOutlineShoppingCart size={20}></MdOutlineShoppingCart>
              <span className="hidden lg:inline-block">
                <MdExpandMore fontSize={"large"}></MdExpandMore>
              </span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
