import { Outlet } from "react-router";
import HeaderAlt from "../components/layout/HeaderAlt";
import ProtectedRoute from "../components/ProtectedRoute";
import ConatinerAlt from "../components/layout/ConatinerAlt";
import SideBar from "../components/layout/SideBar";

const RootLayoutStudio = () => {
  return (
    <div className="bg-studiobody ">
      <ConatinerAlt>
        <HeaderAlt></HeaderAlt>
        <SideBar></SideBar>
        <Outlet></Outlet>
      </ConatinerAlt>
    </div>
  );
};

export default RootLayoutStudio;
