import React from "react";
import Container from "./Container";

const CTASection = () => {
  return (
    <section className="pb-20 pt-4 lg:pt-20">
      <Container>
        <h1 className="font-bebas text-6xl lg:text-[90px] mt-20 text-center px-4 lg:px-[20%] ">
          OVER 2 MILLION CREATERS READY TO WORK WITH YOU!
        </h1>
        <div className="flex justify-center">
          <button className="mt-10 px-10 py-6 rounded-lg bg-primary font-semibold ">
            Start Selling
          </button>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
