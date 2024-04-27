import { ReactNode } from "react";

type Props = { children: ReactNode };

const PageMainContainer = ({ children }: Props) => {
  return <main className="   lg:ml-60 w-[calc(100%-56)]  ">{children}</main>;
};
export default PageMainContainer;
