import React from "react";
import Container from "../components/layout/Container";
import ContainerGrid from "../components/layout/ContainerGrid";
import SideContainer from "../components/layout/SideContainer";
import PageMainContainer from "../components/layout/PageMainContainer";
import BeatItem from "../components/BeatItem";
import BeatItemsContainer from "../components/layout/BeatItemsContainer";
import { useGetUserQuery } from "../features/users/userSlice";
import { useParams } from "react-router-dom";

const Producer = () => {
  const { userId: userName } = useParams();
  console.log(userName);

  const { data: user } = useGetUserQuery(userName ?? "");
  return (
    <Container>
      <ContainerGrid>
        <SideContainer>
          <div>hhh</div>
        </SideContainer>
        <PageMainContainer context="shared">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Tracks</h1>
          </div>
          <BeatItemsContainer view={"box"}>
            <div></div>
            {/* <BeatItem view={"box"} postId={1}></BeatItem> */}
          </BeatItemsContainer>
        </PageMainContainer>
      </ContainerGrid>
    </Container>
  );
};

export default Producer;
