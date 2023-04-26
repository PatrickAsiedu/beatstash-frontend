import React from "react";
import SearchInput from "./SearchInput";

const MobileHeroSection = () => {
  return (
    <section className="mt-12 h-96 bg-slate-600 pt-36 md:hidden">
      <h1 className=" text-3xl font-semibold">
        #1 MARKETPLACE TO BUY & SELL BEATS
      </h1>
      <h2 className="mt-3">
        Discover over 5 million beats to write your next song to
      </h2>
      {/* <SearchInput></SearchInput> */}
    </section>
  );
};

export default MobileHeroSection;
