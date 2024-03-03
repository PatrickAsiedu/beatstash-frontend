import React, { ReactNode } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Container from "./layout/Container";

type HorizontalScrollSectionProps = {
  children: ReactNode;
  title: string;
};

const HorizontalScrollSection = ({
  children,
  title,
}: HorizontalScrollSectionProps) => {
  return (
    <section className="md:mt-14 mb-10 ">
      <Container>
        <div className="flex justify-between ">
          <h1 className="font-bold">{title}</h1>
          <div className="hidden md:flex">
            <button>
              <ArrowCircleLeftIcon fontSize="large"></ArrowCircleLeftIcon>
            </button>
            <button>
              <ArrowCircleRightIcon fontSize="large"></ArrowCircleRightIcon>
            </button>
          </div>
        </div>
        <div className="flex space-x-4 overflow-x-auto scrollable ">
          {children}
        </div>
      </Container>
    </section>
  );
};

export default HorizontalScrollSection;
