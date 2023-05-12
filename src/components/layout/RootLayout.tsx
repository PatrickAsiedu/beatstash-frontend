import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
};

export default RootLayout;
