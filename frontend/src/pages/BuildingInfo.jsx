import { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { MapImg2 } from "../components/MapImg";
import buildingInfo from "../lib/buildingInfo.js";
import PinPosition from "../lib/PinPosition";
import BuildingDetail from "../components/BuildingInfo/BuildingDetail";
import MainIcon from "../components/MainIcon";
import SerachNav from "../components/BuildingInfo/SearchNav";
import BuildingDetailConv from "../components/BuildingInfo/BuildingDetailConv";
import infoConv from "../lib/eachconvenient.js"
//건물 정보 페이지
export default function BuildingInfo() {
  const [buildingVal, setbuildingVal] = useState("");
  const [buildingPosition, setBuildingPosition] = PinPosition([0, 0]);
  const [isDetailPage, setIsDetailPage] = useState(false);
  const [detailPageContent, setDetailPageContent] = useState(null);
  const [activeTab, setActiveTab] = useState("건물정보"); // 탭 만들기
  const [isDetailPageConv, setIsDetailPageConv] = useState(false); // 편의시설
  const [detailPageContentConv, setDetailPageContentConv] = useState(null); // 편의시설
  function handleOnSubmit(e) {
    e.preventDefault();
    const building_name = e.target[0].value;
    // console.log(building_name);
    setBuildingPosition(building_name);
    setbuildingVal(building_name);
    let hasBuildingInfo = false;

    buildingInfo.forEach((building) => {
      if (building.info && building.name === building_name) {
        setIsDetailPage(true);
        setDetailPageContent(building);
        hasBuildingInfo = true;
  
        if (activeTab === "편의시설") {
          setIsDetailPage(false);
        }
      }
    });
  
    if (!hasBuildingInfo) {
      setIsDetailPage(true);
      setDetailPageContent(null);
      console.log("X");
      // Show "건물정보가 없습니다" message here
    }


    let hasBuildingConv = false;
    const infoConvKeys = Object.keys(infoConv);
    infoConvKeys.map((key) => {
      if (key === building_name) {
        setIsDetailPageConv(true);
        setDetailPageContentConv(infoConv[key]);
        hasBuildingConv = true;

        if (activeTab === "편의시설") {
          setIsDetailPageConv(true);
          setIsDetailPage(false);
          // setIsDetailPage(false);
        } else {
          setIsDetailPageConv(false);        
        }
      }
    });

    if (!hasBuildingConv) {
      setIsDetailPageConv(true);
      setDetailPageContentConv(null);
      console.log("X");
      // Show "건물정보가 없습니다" message here
    }
  }

  // 탭 만들기
  function handleTabChange(tab) {
    setActiveTab(tab);
  }

  return (
    <>
      <Container className="Section">
        <MainIcon />
        <BuildingInfoContainer>
          <Pins>
            <PinWrapper>
              <PinName>건물정보</PinName>
              <Pin pinSrc={"/markImgs/MapMark.svg"}></Pin>
            </PinWrapper>
          </Pins>
          {/* 검색창 */}
          <SearchContainer>
            <SerachNav handleOnSubmit={handleOnSubmit}></SerachNav>
            <MapImg2
              arrivalPinX={buildingPosition[0]}
              arrivalPinY={buildingPosition[1]}
            ></MapImg2>
          </SearchContainer>
          <PageInfo>교내 건물을 알려주는 페이지입니다.</PageInfo>
        </BuildingInfoContainer>
        <Article>
          <Section>
            <InfoWrapper>
              <Tab>
                <Div>
                  <Item
                    className={
                      activeTab === "편의시설" ? "selected" : "notSelected"
                    }
                    onClick={() => {
                      handleTabChange("편의시설");
                      if (buildingVal) {
                        setIsDetailPageConv(true);
                        setIsDetailPage(false);
                      } else {
                        setIsDetailPageConv(false);
                      }
                    }}
                  >
                    <BuildingTag>편의시설</BuildingTag>
                  </Item>
                </Div>
                <Div2>
                  <Item2
                    className={
                      activeTab === "건물정보" ? "selected" : "notSelected"
                    }
                    onClick={() => {
                      handleTabChange("건물정보");
                      if (buildingVal) {
                        setIsDetailPage(true);
                        setIsDetailPageConv(false);
                      } else {
                        setIsDetailPage(false);
                      }
                    }}
                  >
                    <BuildingTag>건물정보</BuildingTag>
                  </Item2>
                </Div2>
              </Tab>
              <BuildingContent
                className={activeTab === "건물정보" ? "color1" : "color2"}
              ></BuildingContent>
            </InfoWrapper>
            {activeTab === "건물정보" && isDetailPage && (
              <BuildingDetail
                detailPageContent={detailPageContent}
                setIsDetailPage={setIsDetailPage}
              />
            )}
            {isDetailPageConv && (
              <BuildingDetailConv
                detailPageContentConv={detailPageContentConv}
                setIsDetailPageConv={setIsDetailPageConv}
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
  background-color: #FFFBEE;
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
const InfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 100px;
`
const Tab = styled.div`
  display: flex;
`;
const Div = styled.div`
  height: 5vh;
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  .selected {
    background-color: #FFD336;
    box-shadow: 0px 0px 3.84px rgba(0, 0, 0, 0.25);
  }
  .notSelected {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #D4B752;
    box-shadow: 0px 0px 3.84px rgba(0, 0, 0, 0.25);
  }
`;
const Div2 = styled.div`
  height: 5vh;
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  .selected {
    background-color: #FFC370;
    box-shadow: 0px 0px 3.84px rgba(0, 0, 0, 0.25);
  }
  .notSelected {
    background: #C3914B;
    box-shadow: 0px 3.84px 3.84px rgba(0, 0, 0, 0.25);
  }
`;
const Item = styled.div`
  width: 100px;
  border-right: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  flex-grow: 1;
  writing-mode: vertical-lr;
  text-align: center;
  span {
    display: inline-block;
    padding: 10px;
    font-size: 15px;
  }
`;
const Item2 = styled.div`
  width: 100px;
  border-right: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  flex-grow: 1;
  writing-mode: vertical-lr;
  text-align: center;
  span {
    display: inline-block;
    padding: 10px;
    font-size: 15px;
  }
`;
const BuildingContent = styled.ul`
  text-align: center;
  background-color: #FFC370;
  box-shadow: 0px 3.84px 3.84px rgba(0, 0, 0, 0.25);
  padding: 0;
  margin: 0;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  height: 80vh;
  width: 300px;
  overflow-y: scroll;
  &.color1 {
    background-color: #FFC370;
  }
  
  &.color2 {
    background-color: #FFD336;
  }
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
const SearchContainer = styled.article`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
//핀 정보
const Pins = styled.div`
  position: absolute;
  top: 150px;
  left: 15%;
  z-index: 1;
`;
const PinWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: flex-end;
`;
const Pin = styled.div`
  background-image: url(${(props) => `${props.pinSrc}`});
  background-size: cover;
  background-repeat: no-repeat;
  width: 20px;
  height: 35px;
  filter: drop-shadow(0px 3.84px 3.84px rgba(0, 0, 0, 0.25));
`;
const PinName = styled.p`
  filter: drop-shadow(0px 3.84px 3.84px rgba(0, 0, 0, 0.25));
`;