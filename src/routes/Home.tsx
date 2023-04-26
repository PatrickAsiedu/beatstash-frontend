import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import MobileHeroSection from "../components/MobileHeroSection";

const Home = () => {
  return (
    <>
      <Container>
        <Header></Header>
        <MobileHeroSection></MobileHeroSection>
      </Container>
    </>
  );
};

export default Home;
