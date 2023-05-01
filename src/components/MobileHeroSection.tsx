import React from "react";
import SearchInput from "./SearchInput";

const MobileHeroSection = () => {
  return (
    <section className="mt-12 md:mt-4 h-96  pt-36 lg:hidden">
      <h1 className=" text-3xl md:text-5xl md:leading-[55px] font-semibold">
        #1 MARKETPLACE TO BUY & SELL BEATS
      </h1>
      <h2 className="mt-3 mb-4 md:mb-6">
        Discover over 5 million beats to write your next song to
      </h2>
      <SearchInput variation="main"></SearchInput>
    </section>
  );
};

export default MobileHeroSection;
