import { useState, useRef } from "react";
import styled from "styled-components/macro";
import Canvas from "../components/Map/Canvas";
import { nodeData } from "../lib/mapInfo.js";
import pathData from "../lib/path/path1.json";
import pathData_sum from "../lib/path/path1_1.json";
import pathSlopeData from "../lib/path/path2.json";
import pathSlopeData_sum from "../lib/path/path2_1.json";
import Footer from "../components/Footer";
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
import MapImg from "../components/MapImg";

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
  // const [routeData, setSelectedData] = useState({});
  const [minValue, setMinValue] = useState(Number.POSITIVE_INFINITY);
  const [minBuilding, setMinBuilding] = useState(null);
  const [minDepart, setMinDepart] = useState(null);
  const [minArrive, setMinArrive] = useState(null);
  const [arr2, setArr2] = useState(null);

  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

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
    const arr = [];
    // const test = [];
    const data = isSlope ? pathSlopeData : pathData;
    const sum_data = isSlope ? pathSlopeData_sum : pathData_sum;

    const selectedData = {};
    // let selectedDepart = null;
    // let selectedArrive = null;

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

    let minValue = Number.POSITIVE_INFINITY;
    let minRoute = null;
    let minDepart = null;
    let minArrive = null;

    //sumdata에서 최단경로 계산
    for (const selectedDepart in selectedData) {
      const startbuilding = selectedData[selectedDepart];
      for (const selectedArrive in startbuilding) {
        const value = startbuilding[selectedArrive];
        if (value < minValue) {
          minValue = value;
          // minRoute =
          //   "최단경로 : " + selectedDepart + " 에서 " + selectedArrive;
          minDepart = selectedDepart;
          minArrive = selectedArrive;
        }
      }
    }
    minRoute = "빠른경로 : " + minDepart + " 에서 " + minArrive;

    setSelectedData(selectedData);
    setMinValue(minValue);
    setMinBuilding(minRoute);
    // setSelectedDepart(selectedDepart);
    // setSelectedArrive(selectedArrive);
    //directionsli에서 사용할 submitt data(층수별로 바뀜)
    setSubmittedDepart(minDepart);
    setSubmittedArrive(minArrive);
    setMinDepart(minDepart);
    setMinArrive(minArrive);

    // const arr2 = [];
    data[minDepart][minArrive].map((item) => {
      arr.push(nodeData[item]);
      // arr2.push(item);
    });

    setNodes([...arr]);
  };

  const setPinPositions2 = (departures, newDestination) => {
    const arr = [];
    // const test = [];
    const data = isSlope ? pathSlopeData : pathData;
    const sum_data = isSlope ? pathSlopeData_sum : pathData_sum;

    const selectedData = {};
    // let selectedDepart = null;
    // let selectedArrive = null;

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
    let minRoute = null;
    let minDepart = null;
    let minArrive = null;

    //sumdata에서 최단경로 계산
    for (const selectedDepart in selectedData) {
      const startbuilding = selectedData[selectedDepart];
      for (const selectedArrive in startbuilding) {
        const value = startbuilding[selectedArrive];
        if (value < minValue) {
          minValue = value;
          // minRoute =
          //   "최단경로 : " + selectedDepart + " 에서 " + selectedArrive;
          minDepart = selectedDepart;
          minArrive = selectedArrive;
        }
      }
    }
    minRoute = "빠른경로 : " + minDepart + " 에서 " + minArrive;

    setSelectedData(selectedData);
    setMinValue(minValue);
    setMinBuilding(minRoute);
    // setSelectedDepart(selectedDepart);
    // setSelectedArrive(selectedArrive);
    //directionsli에서 사용할 submitt data(층수별로 바뀜)
    setSubmittedDepart(minDepart);
    setSubmittedArrive(minArrive);
    setMinDepart(minDepart);
    setMinArrive(minArrive);

    // const arr2 = [];
    data[minDepart][minArrive].map((item) => {
      arr.push(nodeData[item]);
      // arr2.push(item);
    });

    setNodes([...arr]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (toggleButton) {
      const departures = e.target[0].value.replaceAll(" ", "");
      const arrivals = e.target[2].value.replaceAll(" ", "");
      //가장 가까운 건물명 알아내는 알고리즘
      // console.log(e.target[0].value);
      // console.log(e.target[1].value);
      // console.log(e.target[2].value);
      const destinations = conv[departures][arrivals];
      // console.log(destinations);
      showClose(destinations, arrivals);
      //setArrivaldata하는함수 destinations의 건물마다 이미지랑  건물이름 튜플로 저장
      // console.log(arrivalData);
      setdeparturePinPosition(departures);
      //목표 건물
      let newDestination = destinations[0].split(" ")[0];
      setArrivalPinPosition(newDestination);
      setArrival(newDestination);
      setDeparture(departures);
      //submmitteddata가 반영아 안됨?
      // setSubmittedDepart(departures);
      // setSubmittedArrive(newDestination);
      setDepartBuilding(departures);
      setArriveBuilding(newDestination);
      console.log(departures);
      console.log(newDestination);
      console.log(departBuilding);
      console.log(arriveBuilding);
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
  const handleClick = (e) => {
    var x = e.clientX;
    var y = e.clientY;
    console.log("마우스 클릭 좌표 - X: " + x + ", Y: " + y);
    // Canvas(isStart, [x, y], 1000, 687.14, "red");
    setClickPosition({ x, y });
    // setNodes([x, y]);
  };
  const selectFloor = (buildingKey, index) => {
    setSubmittedDepart(minDepart);
    setSubmittedArrive(minArrive);
    const arr = [];
    // const arr2 = [];
    const data = isSlope ? pathSlopeData : pathData;
    data[buildingKey][minArrive].map((item) => {
      arr.push(nodeData[item]);
      // arr2.push(item);
    });

    // setArr2(arr2);

    // console.log(arr2);

    setNodes([...arr]);
    setIsSelected(index);
    setIsStart(!isStart);
    
  };
  return (
    <>
      <Section className="Section">
        <MapContentContainer onClick={handleClick}>
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
            <CanvasContainer>
              <Canvas
                isStart={isStart}
                nodePositions={nodes}
                // canvasWidth={1236}
                // canvasHeight={853}
                canvasWidth={981}
                canvasHeight={532}
                color={isSlope ? "blue" : "red"}
                clickPosition={clickPosition}
                // arrivalPinPosition={arrivalPinPosition}
                // departurePinPosition={departurePinPosition}
              />
              {/* <SearchContainer>
                <MapImg
                  arrivalPinX={arrivalPinPosition[0]}
                  arrivalPinY={arrivalPinPosition[1]}
                  departurePinX={departurePinPosition[0]}
                  departurePinY={departurePinPosition[1]}
                  convenient={true}
                ></MapImg>
              </SearchContainer> */}
            </CanvasContainer>
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
          {toggleButton ? (
            <CloseConvList
              arrivalData={arrivalData}
              arrival={arrival}
              departure={departure}
            ></CloseConvList>
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

        <ButtonInfo onClick={() => (window.location.href = "/buildingInfo")}>
          <b>건물 정보</b>
        </ButtonInfo>
      </Section>
      {/* <Footer /> */}
    </>
  );
};
export default Map;
const Section = styled.section`
  display: flex;
  height: 100vh;
  background-color: #fffbee;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    header input {
      padding: 0px;
      width: 5rem;
      text-align: center;
      height: 2em;
    }
    *:not(footer > *) {
      font-size: 0.65rem;
      /* font-size: 0.8rem; */
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
        width: 50%;
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
    #convenientList {
      margin: 0;
      width: auto;
    }
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
  justify-content: center;
  width: auto;
  min-width: 370px;
  z-index: 0;
  @media screen and (min-width: 801px) {
    height: 100vh;
    padding-right: 10vw;
    padding-left: 10vw;
  }
  @media screen and (max-width: 800px) {
    padding-bottom: 3.5em;
  }
`;
const MapH3 = styled.h3`
  position: relative;
`;
const Span = styled.span`
  font-size: 17px;
  /* display: inline-block; */
  margin: 10px;
  /* flex-shrink: 1; */
  /* flex: none; */
  word-break: keep-all;
  text-align: center;
  position: absolute;
  bottom: 30px;
`;
const ButtonInfo = styled.div`
  position: fixed;
  top: 56px;
  right: 5vw;
  width: 6em;
  height: 2.5em;
  background-color: #ffd336;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;

  font-family: "DONGGUK UNIVERSITY";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
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
    width: 100%;
    flex-grow: 1;
    overflow-y: auto;
  }
`;
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
    top: -25px;
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
  font-size: 20px;

  display: flex;
  @media screen and (min-width: 801px) {
    align-items: center;
    padding-left: 0.6em;
  }
  @media screen and (max-width: 800px) {
    justify-content: center;
    padding-top: 0.6em;
  }
`;

//핀 정보
const Pins = styled.div`
  position: absolute;
  top: 120px;
  left: 15%;
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
  margin-right: 10px;
`;
const PinName = styled.p``;

const SearchContainer = styled.article`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`;