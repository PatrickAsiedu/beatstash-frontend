import React from "react";
import SearchInput from "../SearchInput";
import Container from "./Container";

const DesktopHeroSection = () => {
  return (
    <section className="hidden lg:block pt-36">
      <Container>
        <h1 className=" text-6xl w-[50%] leading-[60px] mb-8 font-bebas">
          THE WORLD'S #1 MARKETPLACE TO BUY & SELL BEATS
        </h1>
        <SearchInput variation="main"></SearchInput>
      </Container>
    </section>
  );
};

export default DesktopHeroSection;
