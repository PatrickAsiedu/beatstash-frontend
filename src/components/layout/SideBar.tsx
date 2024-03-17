import { MdOutlineHome } from "react-icons/md";
import NavItem from "../ui/NavItem";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const navLinks = [
  {
    id: 1,
    title: "Dashboard",
    link: "/studio",
    svg: <MdOutlineHome size={25}></MdOutlineHome>,
  },
  {
    id: 2,
    title: "Uploads",
    link: "/studio/uploads",
    svg: <MdOutlineDriveFolderUpload size={25}></MdOutlineDriveFolderUpload>,
  },
  {
    id: 3,
    title: "Sales",
    link: "/studio/sales",
    svg: <RiMoneyDollarCircleLine size={25}></RiMoneyDollarCircleLine>,
  },
];

const SideBar = () => {
  return (
    <nav className="hidden lg:w-[20%] md:block lg:fixed  h-[100vh] mt-[72px] top-0 px-4 pt-10 border  ">
      {navLinks.map((nav) => (
        <NavItem key={nav.id} navitem={nav}></NavItem>
      ))}
    </nav>
  );
};

export default SideBar;
