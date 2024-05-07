import { ReactNode } from "react";

type Props = { children: ReactNode; context: string };

const PageMainContainer = ({ children, context }: Props) => {
  return (
    <main
      className={
        context === "full" ? "w-full" : "   lg:ml-60 w-[calc(100%-56)]  "
      }
    >
      {children}
    </main>
  );
};
export default PageMainContainer;
