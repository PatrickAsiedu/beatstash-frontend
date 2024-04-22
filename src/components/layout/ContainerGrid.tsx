import { ReactNode } from "react";

type Props = { children: ReactNode };

const ContainerGrid = ({ children }: Props) => {
  return (
    <div className="pt-4 mt-10 md:mt-16 lg:mt-0 relative ">{children}</div>
  );
};
export default ContainerGrid;
