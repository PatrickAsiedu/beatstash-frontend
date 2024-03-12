import { NavLink } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";

const SideBar = () => {
  return (
    <nav className="hidden lg:w-[20%] lg:block lg:fixed  h-[100vh] mt-[72px] top-0 px-4 pt-10 ">
      <NavLink
        to="studio"
        className="flex items-center bg-gray-800 py-2 rounded-md px-2"
      >
        <span className="mr-4">
          <MdOutlineHome size={24} className="" />
        </span>
        Dashboard
      </NavLink>
    </nav>
  );
};

export default SideBar;
