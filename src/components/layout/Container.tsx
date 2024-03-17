import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  custom?: string;
};

const Container = ({ children, custom }: ContainerProps) => {
  return (
    <div
      className={
        custom === "studio"
          ? "px-4"
          : " px-4 lg:px-8  2xl:px-24 2xl:max-w-[1536px] mx-auto "
      }
    >
      {children}
    </div>
  );
};

export default Container;
