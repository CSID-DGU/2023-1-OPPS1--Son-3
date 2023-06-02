import { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import MapImg from "../components/MapImg";
import buildingInfo from "../lib/buildingInfo.js";
import PinPosition from "../lib/PinPosition";
import BuildingDetail from "../components/BuildingInfo/BuildingDetail";
import MainIcon from "../components/MainIcon";

//건물 정보 페이지
export default function BuildingInfo() {
  const [buildingPosition, setBuildingPosition] = PinPosition([0, 0]);
  const [isDetailPage, setIsDetailPage] = useState(false);
  const [detailPageContent, setDetailPageContent] = useState(null);
  return (
    <>
      <Container className="Section">
        <MainIcon />
        <BuildingInfoContainer>
          <div>

          </div>
          <MapImg
            arrivalPinX={buildingPosition[0]}
            arrivalPinY={buildingPosition[1]}
          ></MapImg>
          <PageInfo>
            교내 건물을 알려주는 페이지입니다.
          </PageInfo>
        </BuildingInfoContainer>
        <Article>
          <Section>
            <Div>
              <Item className="selected">
                <BuildingTag>건물명</BuildingTag>
              </Item>
            </Div>
            <BuildingContent className="content">
              {buildingInfo.map((building, index) => {
                return (
                  <Building
                    key={index}
                    onClick={() => {
                      if (building.info) {
                        setIsDetailPage(true);
                        setDetailPageContent(building);
                      }
                    }}
                    onMouseOver={() => {
                      setBuildingPosition(building.name);
                    }}
                  >
                    <BuildingName>{building.name}</BuildingName>
                    {building.info ? (
                      <InfoIcon src="/markImgs/info_icon2.png"></InfoIcon>
                    ) : null}
                  </Building>
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
  // 반응형
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
    article {
      flex-grow: 1;
      margin-left: 0;
      .content {
        flex-grow: 1;
        height: fit-content;
        img {
          width: 3%;
        }
      }
    }
    .detailPage {
      top: 130px;
      left: 50%;
    }
    .selected {
      display: none;
    }
    *:not(footer > *) {
      font-size: 0.6rem;
    }
    #icon {
      display: none;
    }
  }
  @media screen and (min-width: 601px) and (max-width: 900px) {
    flex-direction: column;
    height: auto;
    *:not(footer > *) {
      font-size: 0.9rem;
    }
    .detailPage {
      top: 200px;
      left: 50%;
    }
    article {
      flex-grow: 1;
      margin-left: 0;
      .content {
        flex-grow: 1;
        height: fit-content;
        img {
          width: 3%;
        }
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
const BuildingName = styled.span`
  list-style-type: unset;
  padding: 10px;
  font-size: 1.25rem;
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
const BuildingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  flex-grow: 1;
`;
const InfoIcon = styled.img`
  width: 7%;
  vertical-align: text-bottom;
  margin: 0 2px;
`;
const PageInfo = styled.p`
  margin: 0 10px;
`;
const Building = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 0.7px black solid;
  }
  &:hover {
    background-color: rgb(247, 214, 123);
  }
`;
