import { useState, useRef } from "react";
import styled from "styled-components";
import Canvas from "../components/Map/Canvas";
import { nodeData } from "../lib/mapInfo.js";
import pathData from "../lib/path/path1.json";
import pathSlopeData from "../lib/path/path2.json";
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
  const targetBuildings = useLocation();
  const setPinPositions = () => {
    const arr = [];
    const data = isSlope ? pathSlopeData : pathData;
    data[departBuilding][arriveBuilding].map((item) => {
      arr.push(nodeData[item]);
    });
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
  return (
    <>
      <Section className="Section">
        <MapContentContainer>
          <MapHeader
            targetBuildings={targetBuildings.state}
            arriveBuilding={arriveBuilding}
            setArriveBuilding={setArriveBuilding}
            departBuilding={departBuilding}
            setDepartBuilding={setDepartBuilding}
            handleOnSubmit={handleOnSubmit}
          />
          <Canvas
            isStart={isStart}
            nodePositions={nodes}
            canvasWidth={1000}
            canvasHeight={687.14}
            color={isSlope ? "blue" : "red"}
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
      </Section>
      <Footer />
    </>
  );
};
export default Map;
const Section = styled.section`
  display: flex;
  @media screen and (max-width: 600px) {
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
    & #canvas {
      width: 370px;
      height: 254.24px;
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
  @media screen and (min-width: 601px) and (max-width: 900px) {
    flex-direction: column;
    height: auto;
    #DirectionList {
      width: 100%;
      margin: 0;
      width: auto;
      #icon {
        display: none;
      }
      img {
        width: 40%;
      }
    }
    *:not(footer > *) {
      font-size: 0.9rem;
    }
    header > form {
      flex-shrink: 1;
      input {
        padding: 2px;
        width: 8rem;
        height: 40px;
      }
    }
    button {
      width: 4rem;
      height: 2rem;
    }
    #icon {
      display: none;
    }
    & #canvas {
      width: 700px;
      height: 481px;
    }
    .smallerFont {
      font-size: 11px;
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
  position: relative;
`;
const Span = styled.span`
  font-size: 17px;
  display: inline-block;
  margin: 10px;
  flex-shrink: 1;
  flex: none;
`;
