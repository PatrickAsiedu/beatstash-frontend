import { ReactNode } from "react";

type Props = { children: ReactNode };

const SideContainer = ({ children }: Props) => {
  return (
    <aside className="hidden lg:block lg:fixed pt-6 px-4   bg-bodyvar1 h-screen w-56 rounded-md">
      {children}
    </aside>
  );
};

export default SideContainer;
