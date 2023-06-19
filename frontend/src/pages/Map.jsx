import { useState, useRef } from "react";
import styled from "styled-components/macro";
import Canvas from "../components/Map/Canvas";
import { nodeData } from "../lib/mapInfo.js";
import pathData from "../lib/path/path1.json";
import pathData_sum from "../lib/path/path1_1.json";
import pathSlopeData from "../lib/path/path2.json";
import pathSlopeData_sum from "../lib/path/path2_1.json";
import Shortcut from "../lib/shortcut/shortcut1.json";
import SlopShortCut from "../lib/shortcut/shortcut2.json";
import DirectionLi from "../components/Map/DirectionsLi";
import SlopeIcon from "../components/Map/SlopeIcon";
import MapHeader from "../components/Map/MapHeader";
import { useLocation } from "react-router-dom";
import { conv } from "../lib/convenient";
import convImages from "../lib/convImages";
import { PinPosition2 } from "../lib/PinPosition";
import CloseConvList from "../components/Convenient/CloseConvs";
import MainIcon from "../components/MainIcon";

const Map = () => {
  const [isStart, setIsStart] = useState(false);
  const [departBuilding, setDepartBuilding] = useState("");
  const [arriveBuilding, setArriveBuilding] = useState("");
  const [nodes, setNodes] = useState([]);
  const [isSlope, setIsSlope] = useState(true);
  const appliedShortcut = useRef(null);
  const [submittedDepart, setSubmittedDepart] = useState(null);
  const [submittedArrive, setSubmittedArrive] = useState(null);

  
  const [isSelected, setIsSelected] = useState(null);

  const [selectedData, setSelectedData] = useState({});
  const [minValue, setMinValue] = useState(Number.POSITIVE_INFINITY);
  const [minDepart, setMinDepart] = useState(null);
  const [minArrive, setMinArrive] = useState(null);


  const [toggleButton, setToggleButton] = useState(false);

  const targetBuildings = useLocation();

  const showClose = (closeBuildings, arrival) => {
    const showDataArr = [];
    closeBuildings.map((building) => {
      const buildingName = building.replaceAll(" ", "");
      const img = convImages[arrival][buildingName];
      const showData = {
        img: img,
        title: building,
      };
      showDataArr.push(showData);
    });
    setArrivalData(showDataArr);
  };
  const [arrivalPinPosition, setArrivalPinPosition] = PinPosition2([0, 0]);
  const [departurePinPosition, setdeparturePinPosition] = PinPosition2([0, 0]);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [arrivalData, setArrivalData] = useState([]);
  //이미지랑 건물 몇층어딘지 보여주기용

  const setPinPositions = () => {
    if(arriveBuilding && departBuilding){
      
      const arr = [];
      const data = isSlope ? pathSlopeData : pathData;
      const sum_data = isSlope ? pathSlopeData_sum : pathData_sum;
      
      const selectedData = {};
      
      //To do
      //넘겨받은 층수데이터를 이용해 해당 층수 출발일때 도착건물의 최단출입구를 구하기
      
      for (const buildingKey in sum_data) {
      if (buildingKey.includes(departBuilding) && buildingKey.includes("층")) {
        selectedData[buildingKey] = {};
        const buildingData = sum_data[buildingKey];
        for (const key in buildingData) {
          if (key.includes(arriveBuilding) && key.includes("층")) {
            selectedData[buildingKey][key] = buildingData[key];
          } else {
            selectedData[buildingKey][arriveBuilding] =
            buildingData[arriveBuilding];
          }
        }
      } else {
          selectedData[departBuilding] = {};
          const buildingData = sum_data[departBuilding];
          for (const key in buildingData) {
            if (key.includes(arriveBuilding) && key.includes("층")) {
              selectedData[departBuilding][key] = buildingData[key];
            } else {
              selectedData[departBuilding][arriveBuilding] =
              buildingData[arriveBuilding];
            }
          }
        }
      }
      // selectFloor(buildingKey, index);
    
      let minValue = Number.POSITIVE_INFINITY;
      let minDepart = null;
      let minArrive = null;
      // let minindex = 0;
      
    // console.log(Object.values(selectedData));
    //sumdata에서 최단경로 계산
      for (const selectedDepart in selectedData) {
        const startbuilding = selectedData[selectedDepart];
        for (const selectedArrive in startbuilding) {
          const value = startbuilding[selectedArrive];
          if (value < minValue) {
            minValue = value;
            minDepart = selectedDepart;
            minArrive = selectedArrive;
          }
        }
      }
      
      setSelectedData(selectedData);
      setMinValue(minValue);
      //directionsli에서 사용할 submitt data(층수별로 바뀜)
      setSubmittedDepart(minDepart);
      setSubmittedArrive(minArrive);
      setMinDepart(minDepart);
      setMinArrive(minArrive);
      
      data[minDepart][minArrive].map((item) => {
        arr.push(nodeData[item]);
      });
      
      setNodes([...arr]);
      // selectFloor(minDepart, );
    };
  }
  
  const setPinPositions2 = (departures, newDestination) => {
    const arr = [];
    const data = isSlope ? pathSlopeData : pathData;
    const sum_data = isSlope ? pathSlopeData_sum : pathData_sum;

    const selectedData = {};

    //To do
    //넘겨받은 층수데이터를 이용해 해당 층수 출발일때 도착건물의 최단출입구를 구하기

    for (const buildingKey in sum_data) {
      if (buildingKey.includes(departures) && buildingKey.includes("층")) {
        selectedData[buildingKey] = {};
        const buildingData = sum_data[buildingKey];
        for (const key in buildingData) {
          if (key.includes(newDestination) && key.includes("층")) {
            selectedData[buildingKey][key] = buildingData[key];
          } else {
            selectedData[buildingKey][newDestination] =
              buildingData[newDestination];
          }
        }
      } else {
        selectedData[departures] = {};
        const buildingData = sum_data[departures];
        for (const key in buildingData) {
          if (key.includes(newDestination) && key.includes("층")) {
            selectedData[departures][key] = buildingData[key];
          } else {
            selectedData[departures][newDestination] =
              buildingData[newDestination];
          }
        }
      }
    }

    let minValue = Number.POSITIVE_INFINITY;
    let minDepart = null;
    let minArrive = null;

    //sumdata에서 최단경로 계산
    // console.log(Object.keys(selectedData));
    for (const selectedDepart in selectedData) {
      const startbuilding = selectedData[selectedDepart];
      for (const selectedArrive in startbuilding) {
        const value = startbuilding[selectedArrive];
        if (value < minValue) {
          minValue = value;
          minDepart = selectedDepart;
          minArrive = selectedArrive;
        }
      }
    }

    setSelectedData(selectedData);
    setMinValue(minValue);
    //directionsli에서 사용할 submitt data(층수별로 바뀜)
    setSubmittedDepart(minDepart);
    setSubmittedArrive(minArrive);
    setMinDepart(minDepart);
    setMinArrive(minArrive);

    data[minDepart][minArrive].map((item) => {
      arr.push(nodeData[item]);
    });

    setNodes([...arr]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (toggleButton) {
      const departures = e.target[0].value.replaceAll(" ", "");
      const arrivals = e.target[2].value.replaceAll(" ", "");
      //가장 가까운 건물명 알아내는 알고리즘
      const destinations = conv[departures][arrivals];
      showClose(destinations, arrivals);
      //setArrivaldata하는함수 destinations의 건물마다 이미지랑  건물이름 튜플로 저장
      setdeparturePinPosition(departures);
      //목표 건물
      let newDestination = destinations[0].split(" ")[0];
      setArrivalPinPosition(newDestination);
      setArrival(newDestination);
      setDeparture(departures);
      setDepartBuilding(departures);
      setArriveBuilding(newDestination);
      appliedShortcut.current = isSlope ? SlopShortCut : Shortcut;
      setPinPositions2(departures, newDestination);
      setIsStart(!isStart);
    } else {
      setSubmittedDepart(departBuilding);
      setdeparturePinPosition(departBuilding);
      setSubmittedArrive(arriveBuilding);
      setArrivalPinPosition(arriveBuilding);
      appliedShortcut.current = isSlope ? SlopShortCut : Shortcut;
      setPinPositions();
      setIsStart(!isStart);
    }
  };
  const handleOnClick = () => {
    appliedShortcut.current = isSlope ? SlopShortCut : Shortcut;
    setIsStart(!isStart);
    setPinPositions();
  };
  const selectFloor = (buildingKey, index) => {
    setSubmittedDepart(minDepart);
    setSubmittedArrive(minArrive);
    const arr = [];
    const data = isSlope ? pathSlopeData : pathData;
    data[buildingKey][minArrive].map((item) => {
      arr.push(nodeData[item]);
    });

    setNodes([...arr]);
    setIsSelected(index);
    setIsStart(!isStart);
    setSubmittedDepart(buildingKey);

  };
  return (
    <Body>
      <TopHeader>
        <MainIcon />
        <ButtonInfo onClick={() => (window.location.href = "/buildingInfo")}>
          <b>건물 정보</b>
        </ButtonInfo>
      </TopHeader>
      <MapHeader
        targetBuildings={targetBuildings.state}
        arriveBuilding={arriveBuilding}
        setArriveBuilding={setArriveBuilding}
        departBuilding={departBuilding}
        setDepartBuilding={setDepartBuilding}
        handleOnSubmit={handleOnSubmit}
        setToggleButton={setToggleButton}
        toggleButton={toggleButton}
      />
      <Section className="Section">
        <MapContentContainer>
          <MapCanvasContainer>
            <Pins>
              <PinWrapper>
                <PinName>출발 건물</PinName>
                <Pin pinSrc={"/markImgs/depart.png"}></Pin>
              </PinWrapper>
              <PinWrapper>
                <PinName>도착 건물</PinName>
                <Pin pinSrc={"/markImgs/arrive.png"}></Pin>
              </PinWrapper>
            </Pins>
            <MapH3>
              현재
              <span>{isSlope ? " 편한" : " 빠른"} </span>
              경로입니다.
            </MapH3>
              <Canvas
                isStart={isStart}
                nodePositions={nodes}
                canvasWidth={981}
                canvasHeight={532}
                color={isSlope ? "blue" : "red"}
              />
            <Span>
              교내 경로를 알려주는 페이지입니다. 사람아이콘 클릭 시 경사 빠른/
              편한 경로를 볼 수 있습니다.
            </Span>
          </MapCanvasContainer>
          <SlopeIcon
            handleOnClick={handleOnClick}
            setIsSlope={setIsSlope}
            isSlope={isSlope}
            appliedShortcut={appliedShortcut}
          />
        </MapContentContainer>
        <MapArticleContainer>
          <Tab>
            <Tab_child1
              style={{
                backgroundColor: toggleButton ? "#ffd336" : "#d4b752",
                boxShadow: toggleButton
                  ? "0px 0px 3.84px rgba(0, 0, 0, 0.25)"
                  : "0px 0px 3.84px rgba(0, 0, 0, 0.25)",
              }}
              onClick={() => setToggleButton(true)}
            >
              편의시설
            </Tab_child1>
            <Tab_child2
              style={{
                backgroundColor: toggleButton ? "#c3914b" : "#ffc370",
                boxShadow: toggleButton
                  ? "0px 0px 3.84px rgba(0, 0, 0, 0.25)"
                  : "box-shadow: 0px 0px 3.84px rgba(0, 0, 0, 0.25)",
              }}
              onClick={() => setToggleButton(false)}
            >
              경로안내
            </Tab_child2>
          </Tab>
          {toggleButton ? (
            <CloseConvList
              arrivalData={arrivalData}
              arrival={arrival}
              departure={departure}
            />
          ) : (
            <DirectionLi
              submittedArrive={submittedArrive}
              submittedDepart={submittedDepart}
              appliedShortcut={appliedShortcut}
            />
          )}
          <FloorSelector>
            {Object.keys(selectedData).map((buildingKey,index) => {
              if (!buildingKey.includes("층")) {
                return null;
              } else {
                return (
                  <FloorSelection 
                    onClick={() => {
                      selectFloor(buildingKey, index);
                    }
                  }
                    style={{
                      fontWeight : index === isSelected ? "bold" : "normal",
                      color : index === isSelected ? "red" : "black"
                      }
                    }
                  >
                    {buildingKey.slice(-2)}
                  </FloorSelection>
                );
              }
            })}
          </FloorSelector>
        </MapArticleContainer>
      </Section>
    </Body>
  );
};
export default Map;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    * {
      font-size: 0.65rem;
      /* font-size: 0.7rem; */
    }
  }
`;
const Section = styled.section`
  display: flex;
  height: calc(100vh - 130px);
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: space-between;
    header input {
      padding: 0px;
      width: 5rem;
      text-align: center;
      height: 2em;
    }
    button {
      width: 3rem;
      height: 1.5rem;
    }
    form {
      margin: 0.625rem;
    }
    form > div {
      padding: 5px;
    }
    #icon {
      display: none;
    }
    #DirectionList {
      margin: 0;
      img {
        width: 240px;
      }
    }
    #convenientList {
      margin: 0;
      img {
        width: 240px;
      }
    }
    .smallerFont {
      font-size: 10px;
    }
    #canvas {
      max-height: 285px;
      /* max-width: 100%;
      max-height: 100%; */
    }
  }
  @media screen and (max-width: 1200px) and(min-width: 801px) {
    flex-direction: column;
    height: auto;
    header > form {
      flex-shrink: 1;
      input {
        width: 140px;
        height: 50px;
      }
    }
    *:not(footer > *) {
      font-size: 1.5rem;
    }
  }
`;
const TopHeader = styled.div`
  width: 100vw;
  align-items: flex-start;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5vw;
`;
const MapContentContainer = styled.div`
  display: flex;
  gap: 1vh;
  flex-direction: column;
  align-items: center;
  position: relative;
  pointer-events: auto;
  @media screen and (min-width: 801px) {
    flex-grow: 1;
  }
`;
const MapCanvasContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: auto;
  height: 100%;
  min-width: 370px;
  z-index: 0;
  @media screen and (min-width: 801px) {
    padding-right: 7vw;
    padding-left: 10vw;
  }
  @media screen and (max-width: 800px) {
  }
`;
const MapH3 = styled.span`
  position: relative;
  /* font-size: 1.17em; */
  font-weight: bold;
`;
const Span = styled.span`
  /* display: inline-block; */
  margin: 10px;
  /* flex-shrink: 1; */
  /* flex: none; */
  word-break: keep-all;
  text-align: center;
`;
const ButtonInfo = styled.div`
  width: 6em;
  height: 2.5em;
  background-color: #ffd336;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;

  font-family: "DONGGUK UNIVERSITY";
  font-style: normal;
  font-weight: 400;
  line-height: 21px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapArticleContainer = styled.div`
  position: relative;
  @media screen and (min-width: 801px) {
    flex-shrink: 0;
    height: calc(100vh - 175px);
    width: 300px;
    align-self: flex-end;
  }
  @media screen and (max-width: 800px) {
    padding-top: 27px;
    width: 100%;
    flex-grow: 1;
    overflow-y: auto;
  }
`;
const Tab = styled.div`
  position: absolute;
  top: 2px;
  right: 0;
  @media screen and (min-width: 801px) {
    transform: translateY(calc(-100% + 1px));
  }
  display: flex;
  cursor: pointer;
  font-weight: bold;
`;
const Tab_child1 = styled.div`
  height: 25px;
  width: 6.25em;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 3px;
  @media screen and (min-width: 801px ) {
    letter-spacing: 3px;
    height: 5vh;
  }
  .selected {
    background-color: #ffd336;
    box-shadow: 0px 0px 3.84px rgba(0, 0, 0, 0.25);
  }
  .notSelected {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      #d4b752;
    box-shadow: 0px 0px 3.84px rgba(0, 0, 0, 0.25);
  }
`
const Tab_child2 = styled.div`
  height: 25px;
  width: 6.25em;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 801px ) {
    letter-spacing: 3px;
    height: 5vh;
  }
  .selected {
    background-color: #ffc370;
    box-shadow: 0px 0px 3.84px rgba(0, 0, 0, 0.25);
  }
  .notSelected {
    background: #c3914b;
    box-shadow: 0px 0px 3.84px rgba(0, 0, 0, 0.25);
  }
`
const FloorSelector = styled.div`
  position: absolute;
  display: flex;
  z-index: 0;
  @media screen and (min-width: 801px) {
    flex-direction: column;
    top: 20px;
    left: -45px;
  }
  @media screen and (max-width: 800px) {
    top: 7px;
    left: 35px;
  }
`;
const FloorSelection = styled.div`
  border-radius: 50%;
  width: 4.2em;
  height: 4.2em;

  :first-child {
    background-color: #ffe68c;
  }
  :nth-child(2) {
    background-color: #ffd79e;
  }
  :nth-child(3) {
    background-color: #ffc59b;
  }
  cursor: pointer;

  font-family: "DONGGUK UNIVERSITY";
  font-style: normal;
  font-weight: bold;

  display: flex;
  @media screen and (min-width: 801px) {
    align-items: center;
    padding-left: 0.6em;
    font-size: 20px;
  }
  @media screen and (max-width: 800px) {
    justify-content: center;
    padding-top: 0.6em;
  }
`;

//핀 정보
const Pins = styled.div`
  position: absolute;
  top: 15%;
  left: 10%;
  @media screen and (max-width: 800px) {
    top: 0;
    left: 15px;
  }
  z-index: 1;
  display: flex; /* 추가 */
  flex-direction: row; /* 추가 */
  align-items: center; /* 추가 */
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
  width: 35px;
  height: 35px;
  @media screen and (max-width: 800px) {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
  margin-right: 10px;
`;
const PinName = styled.p``;
const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`;