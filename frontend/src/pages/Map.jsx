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
      if (buildingKey.includes(departBuilding)) {
        selectedData[buildingKey] = {};
        const buildingData = sum_data[buildingKey];
        for (const key in buildingData) {
          if (key.includes(arriveBuilding)) {
            selectedData[buildingKey][key] = buildingData[key];
          }
        }
      }
    }

    let minValue = Number.POSITIVE_INFINITY;
    let minbuilding = null;

    for (selectedDepart in selectedData) {
      const startbuilding = selectedData[selectedDepart];
      for (selectedArrive in startbuilding) {
        const value = startbuilding[selectedArrive];
        if (value < minValue) {
          minValue = value;
          minbuilding =
            "최단경로 : " + selectedDepart + " 에서 " + selectedArrive;
        }
      }
    }

    console.log(selectedData);
    console.log(minValue);
    console.log(minbuilding);
    console.log(selectedDepart);
    console.log(selectedArrive);
    // selectedData[selectedDepart][selectedArrive]((item) => {
    //   test.push(nodeData[item]);
    // });

    //To do
    //층 선택하면 층수 데이터에 맞는 최단 입구 경로 최단경로 보여주기

    // selectedData[selectedDepart][selectedArrive].map((item) => {
    //   arr.push(nodeData[item]);
    // });

    data[departBuilding][arriveBuilding].map((item) => {
      arr.push(nodeData[item]);
    });

    console.log(arr);
    setNodes([...arr]);
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
        <ButtonInfo>
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
          <h3>
            현재 경사
            <span>{isSlope ? " 반영" : " 미반영"} </span>
            경로입니다.
          </h3>
          <Canvas
            isStart={isStart}
            nodePositions={nodes}
            canvasWidth={1000}
            canvasHeight={687.14}
            color={isSlope ? "blue" : "red"}
            clickPosition={clickPosition}
          />
          <Span>
            교내 경로를 알려주는 페이지입니다. 사람아이콘 클릭 시 경사 반영 및
            미반영 경로를 볼 수 있습니다
          </Span>
          <SlopeIcon
            handleOnClick={handleOnClick}
            setIsSlope={setIsSlope}
            isSlope={isSlope}
            appliedShortcut={appliedShortcut}
          />
        </MapContentContainer>
        <DirectionLi
          submittedArrive={submittedArrive}
          submittedDepart={submittedDepart}
          appliedShortcut={appliedShortcut}
        />
        <FloorSelector>
          <FloorSelection>1층</FloorSelection>
          <FloorSelection>4층</FloorSelection>
          <FloorSelection>6층</FloorSelection>
        </FloorSelector>
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
    header input {
      padding: 0px;
      width: 6rem;
      text-align: center;
      height: 30px;
    }
    *:not(footer > *) {
      font-size: 0.8rem;
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
    flex-direction: column;
    height: auto;
    #icon {
      display: none;
    }
    #DirectionList {
      width: 100%;
      margin: 0;
      img {
        width: 50%;
      }
    }
    .smallerFont {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 1200px) and(min-width: 800px) {
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
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  justify-content: space-evenly;
  position: relative;
  pointer-events: auto;
`;
const Span = styled.span`
  font-size: 17px;
  display: inline-block;
  margin: 10px;
  flex-shrink: 1;
  flex: none;
  word-break: keep-all;
  text-align: center;
`;
const ButtonInfo = styled.div`
  position: absolute;
  top: 56px;
  right: 65px;
  width: 110px;
  height: 45px;
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

const FloorSelector = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 205px;
  right: 260px;
  z-index: 0px;
`;
const FloorSelection = styled.div`
  border-radius: 50%;
  width: 80px;
  height: 80px;
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
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
