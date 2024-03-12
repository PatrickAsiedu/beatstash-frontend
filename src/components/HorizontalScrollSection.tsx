import { ReactNode } from "react";

import Container from "./layout/Container";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

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
              <FaArrowAltCircleLeft size={30}></FaArrowAltCircleLeft>
            </button>
            <button>
              <FaArrowAltCircleRight size={30}></FaArrowAltCircleRight>
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
