import { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import MapImg from "../components/MapImg";
import buildingInfo from "../lib/buildingInfo.js";
import PinPosition from "../lib/PinPosition";
import BuildingDetail from "../components/BuildingDetail";
export default function BuildingInfo() {
  const [buildingPosition, setBuildingPosition] = PinPosition([0, 0]);
  const [isDetailPage, setIsDetailPage] = useState(false);
  const [detailPageContent, setDetailPageContent] = useState(null);
  return (
    <>
      <Container className="Section">
        <MapImg
          arrivalPinX={buildingPosition[0]}
          arrivalPinY={buildingPosition[1]}
        ></MapImg>
        <Article>
          <Section>
            <Div>
              <Item className="selected">
                <span>건물명</span>
              </Item>
            </Div>
            <BuildingContent className="content">
              {buildingInfo.map((building) => {
                return (
                  <BuildingName
                    onClick={() => {
                      setDetailPageContent(building);
                      setIsDetailPage(true);
                      setBuildingPosition(building.name);
                    }}
                    onMouseOver={() => {
                      setBuildingPosition(building.name);
                    }}
                  >
                    {building.name}
                  </BuildingName>
                );
              })}
            </BuildingContent>
            {isDetailPage && (
              <BuildingDetail
                detailPageContent={detailPageContent}
                setIsDetailPage={setIsDetailPage}
              />
            )}
          </Section>
        </Article>
      </Container>
      <Footer></Footer>
    </>
  );
}
const Container = styled.section`
  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
    article {
      flex-grow: 1;
      margin-left: 0;
      .content {
        flex-grow: 1;
        height: fit-content;
      }
    }
    .selected {
      display: none;
    }
  }
`;
const Article = styled.article`
  margin-left: auto;
`;
const Section = styled.section`
  display: flex;
`;
const Div = styled.div`
  height: 15vh;
  display: flex;
  margin-top: 12px;
  flex-direction: column;

  .selected {
    background-color: rgb(247, 214, 123);
  }
`;
const Item = styled.div`
  width: 40px;
  border: 3px black solid;
  border-right: 0px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  flex-grow: 1;
  writing-mode: vertical-lr;
  text-align: center;

  span {
    display: inline-block;
    padding: 3px;
    font-size: 23px;
  }
`;
const BuildingContent = styled.ul`
  text-align: center;
  border: 3px black solid;
  padding: 0;
  margin: 0;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  height: 100vh;
  width: 300px;
  overflow-y: scroll;
`;
const BuildingName = styled.div`
  list-style-type: unset;
  padding: 10px;
  font-size: 1.25rem;
  cursor: pointer;
  &:hover {
    background-color: rgb(247, 214, 123);
  }
`;
