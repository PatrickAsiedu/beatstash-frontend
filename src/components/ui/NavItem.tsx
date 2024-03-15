import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

type NavItemProps = {
  key: number;
  navitem: { id: number; title: string; link: string; svg?: ReactNode };
};

const NavItem = ({ navitem }: NavItemProps) => {
  return (
    <NavLink
      to={navitem.link}
      className="flex items-center py-2 rounded-md px-2 "
    >
      <span className="mr-4">{navitem.svg}</span>
      {navitem.title}
    </NavLink>
  );
};
export default NavItem;
