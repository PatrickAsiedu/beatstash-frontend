import Container from "../components/layout/Container";
import ContainerGrid from "../components/layout/ContainerGrid";
import PageMainContainer from "../components/layout/PageMainContainer";
import SideContainer from "../components/layout/SideContainer";
import CartButton from "../components/ui/CartButton";
import { MdOutlineShoppingCart } from "react-icons/md";

const Beat = () => {
  return (
    <Container>
      <ContainerGrid>
        <SideContainer>
          <div></div>
        </SideContainer>
        <PageMainContainer context="shared">
          <div className="w-full h-16 rounded-full bg-bodyvar1 "></div>
          <div className=" w-full h-96 pt-10 bg-bodyvar1 px-6 rounded-md mt-8">
            <div className="flex justify-between items-center mb-4 ">
              <h1 className="text-xl font-semibold">Licensing</h1>
              <div className="flex space-x-6 items-center">
                <h1 className="">
                  <span className="text-text-dark text-xs">
                    TOTAL : <br></br>{" "}
                  </span>
                  $29.6
                </h1>
                <button className="bg-primary py-3 px-4 rounded-md flex items-center space-x-2">
                  <MdOutlineShoppingCart
                    fontSize={"1.5rem"}
                  ></MdOutlineShoppingCart>
                  <span> Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
          <div className=" w-full h-96 pt-10 bg-bodyvar1 px-6 rounded-md mt-8">
            <div className="flex justify-between items-center mb-4 ">
              <h1 className="text-xl font-semibold">Comments</h1>
            </div>
          </div>
        </PageMainContainer>
      </ContainerGrid>
    </Container>
  );
};

export default Beat;
