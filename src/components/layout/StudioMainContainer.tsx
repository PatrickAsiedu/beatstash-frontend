import { ReactNode } from "react";
import Container from "./Container";

type Props = {
  children: ReactNode;
};
export function StudioMainContainer({ children }: Props) {
  return (
    <main className="lg:w-[calc(80%-1rem)] ml-[calc(20%+1rem)]  mt-[72px] ">
      {children}
    </main>
  );
}
