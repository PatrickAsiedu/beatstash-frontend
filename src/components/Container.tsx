import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className=" px-4 lg:px-8  2xl:px-24 2xl:max-w-[1536px] mx-auto ">
      {children}
    </div>
  );
};

export default Container;
