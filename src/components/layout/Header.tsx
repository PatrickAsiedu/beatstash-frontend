import React from "react";
import SearchInput from "../SearchInput";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "./Container";

const Header = () => {
  return (
    <header className="   py-4 md:py-3  md:fixed top-0 w-full ">
      <Container>
        <div className="flex justify-between">
          <div className="relative flex">
            <button
              className="
            lg:hidden mr-3"
            >
              <MenuIcon fontSize={"medium"}></MenuIcon>
            </button>

            <img
              className="mr-4 w-6"
              src="https://www.beatstars.com/assets/img/bs-logos/bs-logo-red.svg"
              alt=""
            />

            <SearchInput variation={"header"}></SearchInput>
          </div>
          <div className="flex space-x-4 lg:space-x-8 md:justify-evenly items-center text-text-dark text-xs font-normal">
            <button className="">Sign up</button>
            <button className="hidden md:flex">Sign in</button>
            <button className="hidden md:flex bg-primary px-4 py-2 rounded-md text-white">
              Start Selling
            </button>
            <button>
              <ShoppingCartIcon></ShoppingCartIcon>
              <span className="hidden lg:inline-block">
                <ExpandMoreIcon fontSize={"small"} sx={{}}></ExpandMoreIcon>
              </span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
