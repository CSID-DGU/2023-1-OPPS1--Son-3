import { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import MapImg from "../components/MapImg";
import buildingInfo from "../lib/buildingInfo.js";
import PinPosition from "../lib/PinPosition";
import BuildingDetail from "../components/BuildingDetail";
import { useNavigate } from "react-router-dom";
export default function BuildingInfo() {
  const [buildingPosition, setBuildingPosition] = PinPosition([0, 0]);
  const [isDetailPage, setIsDetailPage] = useState(false);
  const [detailPageContent, setDetailPageContent] = useState(null);
  const navigate = useNavigate();
  return (
    <>
      <Container className="Section">
        <Icon
          id="icon"
          src="/markImgs/Logo.svg"
          onClick={() => navigate("/mainPage")}
        ></Icon>
        <MapImg
          arrivalPinX={buildingPosition[0]}
          arrivalPinY={buildingPosition[1]}
        ></MapImg>
        <Article>
          <Section>
            <Div>
              <Item className="selected">
                <BuildingTag>건물명</BuildingTag>
              </Item>
            </Div>
            <BuildingContent className="content">
              {buildingInfo.map((building) => {
                return (
                  <BuildingName
                    onClick={() => {
                      setDetailPageContent(building);
                      setIsDetailPage(true);
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
    *:not(footer > *) {
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 900px) {
    flex-direction: column;
    height: auto;
    *:not(footer > *) {
      font-size: 1.2rem;
    }
    article {
      flex-grow: 1;
      margin-left: 0;
      .content {
        flex-grow: 1;
        height: fit-content;
      }
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
const BuildingTag = styled.span`
  letter-spacing: 3px;
`;
const Icon = styled.img`
  width: 10%;
  cursor: pointer;
  position: absolute;
  left: 10px;
  top: 5px;
  z-index: 1;
`;
