import { ReactNode } from "react";
type ContainerAltProps = {
  children: ReactNode;
};

const ConatinerAlt = ({ children }: ContainerAltProps) => {
  return <div className=" px-4 ">{children}</div>;
};

export default ConatinerAlt;
