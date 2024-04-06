import { ReactNode } from "react";

type Props = { children: ReactNode };

const ContainerGrid = ({ children }: Props) => {
  return (
    <div className="pt-4 lg:grid lg:grid-cols-5 gap-6 relative">{children}</div>
  );
};
export default ContainerGrid;
