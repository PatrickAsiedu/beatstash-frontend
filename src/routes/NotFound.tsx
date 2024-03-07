import React from "react";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";
import Container from "../components/layout/Container";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error: any = useRouteError();

  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <Container>
        <h1 className=" mt-20">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Container>
    </>
  );
};

export default NotFound;
