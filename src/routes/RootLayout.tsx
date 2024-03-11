import React from "react";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";
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
