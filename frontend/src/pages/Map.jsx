import { useState, useRef } from "react";
import styled from "styled-components";
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
const Map = () => {
  const [isStart, setIsStart] = useState(false);
  const [departBuilding, setDepartBuilding] = useState("");
  const [arriveBuilding, setArriveBuilding] = useState("");
  const [nodes, setNodes] = useState([]);
  const [isSlope, setIsSlope] = useState(true);
  const appliedShortcut = useRef(null);
  const [submittedDepart, setSubmittedDepart] = useState(null);
  const [submittedArrive, setSubmittedArrive] = useState(null);

  const [selectedData, setSelectedData] = useState({});
  const [minValue, setMinValue] = useState(Number.POSITIVE_INFINITY);
  const [minBuilding, setMinBuilding] = useState(null);
  const [selectedDepart, setSelectedDepart] = useState(null);
  const [selectedArrive, setSelectedArrive] = useState(null);
  const [arr2, setArr2] = useState(null);

  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const targetBuildings = useLocation();
  const setPinPositions = () => {
    const arr = [];
    // const test = [];
    const data = isSlope ? pathSlopeData : pathData;
    const sum_data = isSlope ? pathSlopeData_sum : pathData_sum;

    const selectedData = {};
    let selectedDepart = null;
    let selectedArrive = null;

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
    let minbuilding = null;
    let minDepart = null;
    let minArrive = null;

    //sumdata에서 최단경로 계산
    for (selectedDepart in selectedData) {
      const startbuilding = selectedData[selectedDepart];
      for (selectedArrive in startbuilding) {
        const value = startbuilding[selectedArrive];
        if (value < minValue) {
          minValue = value;
          minbuilding =
            "최단경로 : " + selectedDepart + " 에서 " + selectedArrive;
          minDepart = selectedDepart
          minArrive = selectedArrive
        }
      }
    }
    // console.log(selectedData);
    // console.log(minValue);
    // console.log(minbuilding);
    // console.log(selectedDepart);
    // console.log(selectedArrive);

    setSelectedData(selectedData);
    setMinValue(minValue);
    setMinBuilding(minbuilding);
    setSelectedDepart(selectedDepart);
    setSelectedArrive(selectedArrive);
    setSubmittedDepart(minDepart);
    setSubmittedArrive(minArrive);

    // selectedData[selectedDepart][selectedArrive]((item) => {
    //   test.push(nodeData[item]);
    // });

    //To do
    //층 선택하면 층수 데이터에 맞는 최단 입구 경로 최단경로 보여주기
    const arr2 = [];
    data[minDepart][minArrive].map((item) => {
      arr.push(nodeData[item]);
      arr2.push(item);
    });

    // data[departBuilding][arriveBuilding].map((item) => {
    //   arr.push(nodeData[item]);
    // });
    setArr2(arr2);

    console.log(arr2);
    setNodes([...arr]);
  };

  //FloorSelection 컴포넌트 map으로 출력(출입구별)
  const FloorSelector = () => {
    const buildingKeys = Object.keys(selectedData);
  
    return (
      <>
        {buildingKeys.map((buildingKey) => (
          <FloorSelection >{buildingKey}</FloorSelection>
        ))}
      </>
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSubmittedDepart(departBuilding);
    setSubmittedArrive(arriveBuilding);
    appliedShortcut.current = isSlope ? SlopShortCut : Shortcut;
    setIsStart(!isStart);
    setPinPositions();
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
  return (
    <>
      <Section className="Section">
        <ButtonInfo onClick={() => window.location.href = '/buildingInfo'}>
          <b>건물 정보</b>
        </ButtonInfo>
        <MapContentContainer onClick={handleClick}>
          <MapHeader
            targetBuildings={targetBuildings.state}
            arriveBuilding={arriveBuilding}
            setArriveBuilding={setArriveBuilding}
            departBuilding={departBuilding}
            setDepartBuilding={setDepartBuilding}
            handleOnSubmit={handleOnSubmit}
          />
          <div style={{ position: "absolute", top: "100px", left: "100px" }}>
            {"층별 비교 : " + JSON.stringify(selectedData)}
            <br />
            {"최단 경로 : " + arr2}
            <br />
            {"sum : " + minValue}
            <br />
            {minBuilding}
            <br />
            {"최단경로 출발노드 : " + selectedDepart}
            <br />
            {"최단경로 도착노드 : " + selectedArrive}
          </div>
          <MapCanvasContainer>
            <MapH3>
              현재 경사
              <span>{isSlope ? " 반영" : " 미반영"} </span>
              경로입니다.
            </MapH3>
            <Canvas
              isStart={isStart}
              nodePositions={nodes}
              canvasWidth={1000}
              canvasHeight={687.14}
              // canvasWidth={796.99}
              // canvasHeight={548.16}
              color={isSlope ? "blue" : "red"}
              clickPosition={clickPosition}
            />
            <Span>
              교내 경로를 알려주는 페이지입니다. 사람아이콘 클릭 시 경사 반영 및
              미반영 경로를 볼 수 있습니다
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
          <DirectionLi
            submittedArrive={submittedArrive}
            submittedDepart={submittedDepart}
            appliedShortcut={appliedShortcut}
          />
          <FloorSelector />
        </MapArticleContainer>
      </Section>
      <Footer />
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
  position: absolute;
  top: 0;
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
  bottom: 20px;
`;
const ButtonInfo = styled.div`
  position: absolute;
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
