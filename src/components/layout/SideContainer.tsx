import { ReactNode } from "react";

type Props = { children: ReactNode };

const SideContainer = ({ children }: Props) => {
  return (
    <aside className="hidden lg:block bg-bodyvar1 h-screen w-full rounded-md">
      {children}
    </aside>
  );
};

export default SideContainer;
