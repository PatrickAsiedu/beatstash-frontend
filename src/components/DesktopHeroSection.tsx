import React from "react";
import SearchInput from "./SearchInput";

const DesktopHeroSection = () => {
  return (
    <section className="hidden lg:block">
      <h1 className=" text-5xl font-semibold mt-36 w-[70%] leading-[60px] mb-8">
        THE WORLD'S #1 MARKETPLACE TO BUY & SELL BEATS
      </h1>

      <SearchInput variation="main"></SearchInput>
    </section>
  );
};

export default DesktopHeroSection;
