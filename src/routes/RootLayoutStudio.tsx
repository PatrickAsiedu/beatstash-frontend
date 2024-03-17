import { Outlet } from "react-router";
import HeaderAlt from "../components/layout/HeaderAlt";
import ProtectedRoute from "../components/ProtectedRoute";
import Container from "../components/layout/Container";

import SideBar from "../components/layout/SideBar";

const RootLayoutStudio = () => {
  return (
    <div className="bg-studiobody ">
      <Container custom={"studio"}>
        <HeaderAlt></HeaderAlt>
        <SideBar></SideBar>
        <Outlet></Outlet>
      </Container>
    </div>
  );
};

export default RootLayoutStudio;
