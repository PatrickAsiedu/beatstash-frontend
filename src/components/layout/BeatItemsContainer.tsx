import { ReactNode } from "react";

type Props = { children: ReactNode; view: string };

const BeatItemsContainer = ({ children, view }: Props) => {
  return (
    <div
      className={
        view === "list"
          ? ""
          : view === "box"
          ? "grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4"
          : ""
      }
    >
      {children}
    </div>
  );
};
export default BeatItemsContainer;
