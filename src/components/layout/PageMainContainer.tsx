import { ReactNode } from "react";

type Props = { children: ReactNode };

const PageMainContainer = ({ children }: Props) => {
  return <main className=" col-span-4  ">{children}</main>;
};
export default PageMainContainer;
