import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Canvas from "../components/Canvas";
import { nodeData, buildings } from "../lib/mapInfo.js";
import DropDown from "../components/DropDown";
import useDetectClose from "../lib/useDetectClose";
import pathData from "../path1.json";
import pathSlopeData from "../path2.json";
import Footer from "../components/Footer";
import Shortcut from "../shortcut1.json";
import SlopShortCut from "../shortcut2.json";
const Map = () => {
  const navigate = useNavigate();
  const [isStart, setIsStart] = useState(false);
  const departInput = useRef(null);
  const arriveInput = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(departInput, false);
  const [isOpen2, setIsOpen2] = useDetectClose(arriveInput, false);
  const [departBuilding, setDepartBuilding] = useState("");
  const [arriveBuilding, setArriveBuilding] = useState("");
  const [nodes, setNodes] = useState([]);
  const [isSlope, setIsSlope] = useState(true);
  const appliedShortcut = useRef(null);
  const [submittedDepart, setSubmittedDepart] = useState(null);
  const [submittedArrive, setSubmittedArrive] = useState(null);

  const setPinPositions = () => {
    const arr = [];
    console.log(isSlope);
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
          <Header>
            <Icon
              src="/markImgs/Logo.svg"
              onClick={() => {
                navigate("/mainPage");
              }}
            ></Icon>
            <Form
              onSubmit={(e) => {
                handleOnSubmit(e);
              }}
            >
              <Div>
                <Span>출발지</Span>
                <DropDownWrapper>
                  <Input
                    type="text"
                    name="departInput"
                    innerRef={departInput}
                    autoComplete="off"
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    defaultValue={departBuilding}
                  />
                  <DropDown
                    data={buildings}
                    innerRef={departInput}
                    isOpen={isOpen}
                    setVal={setDepartBuilding}
                    top={12}
                  ></DropDown>
                </DropDownWrapper>
              </Div>
              <Div>
                <Span>도착지</Span>
                <DropDownWrapper>
                  <Input
                    type="text"
                    name="arriveInput"
                    innerRef={arriveInput}
                    autoComplete="off"
                    onClick={() => {
                      setIsOpen2(!isOpen2);
                    }}
                    defaultValue={arriveBuilding}
                  />
                  <DropDown
                    data={buildings}
                    innerRef={arriveInput}
                    setVal={setArriveBuilding}
                    isOpen={isOpen2}
                    top={12}
                  ></DropDown>
                </DropDownWrapper>
              </Div>
              <Button>검색</Button>
            </Form>
          </Header>
          <Canvas
            isStart={isStart}
            nodePositions={nodes}
            canvasWidth={1000}
            canvasHeight={687.14}
            color={isSlope ? "blue" : "red"}
          ></Canvas>
          <Span>교내 경로를 알려주는 페이지입니다.</Span>
          <SlopeIconWrapper
            onClick={async (e) => {
              await setIsSlope(!isSlope);
              await handleOnClick();
            }}
          >
            <SlopeIcon
              src={
                isSlope ? "/markImgs/withoutSlope.png" : "/markImgs/Slope.png"
              }
            />
            <SlopeIconInfo>
              {isSlope ? "경사 미반영 경로 보기" : "경사 반영 경로 보기"}
            </SlopeIconInfo>
          </SlopeIconWrapper>
        </MapContentContainer>
        <MapInfoListContainer>
          <MapInfoList>
            {submittedDepart && submittedArrive
              ? appliedShortcut.current[submittedDepart][submittedArrive].map(
                  (item) => {
                    return (
                      <MapInfo>
                        <h3>{`<${item[0]}>`}</h3>
                        <div>
                          <MapInfoImg src={item[1]}></MapInfoImg>
                        </div>
                        <div>{item[2]}</div>
                      </MapInfo>
                    );
                  }
                )
              : null}
          </MapInfoList>
        </MapInfoListContainer>
      </Section>
      <Footer />
    </>
  );
};
export default Map;
const Section = styled.section`
  display: flex;
`;
const MapContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  position: relative;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  height: 75px;
  width: fill-available;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;
const Div = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  font-size: 25px;
  display: inline-block;
  margin: 10px;
  flex-shrink: 1;
  flex: none;
`;
const Input = styled.input`
  border-radius: 15px;
  padding: 5px;
  width: 150px;
  font-size: 18px;
  border: 2.8px black solid;
`;
const Icon = styled.img`
  height: 75px;
  cursor: pointer;
  position: absolute;
  left: 10px;
`;
const Button = styled.button`
  border-radius: 15px;
  font-size: 20px;
  width: 80px;
  height: 38px;
  color: white;
  background-color: black;
`;
const DropDownWrapper = styled.div`
  position: relative;
`;
const MapInfoListContainer = styled.article`
  height: 100vh;
  width: 300px;
  border: 3px black solid;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  overflow-y: scroll;
`;
const MapInfoList = styled.ul`
  padding: unset;
  margin: 4%;
`;
const SlopeIcon = styled.img`
  width: 70%;
  border-radius: 50%;
  &:hover {
    box-shadow: 0px 0px 2px 2px #e0dfdf;
    scale: 1.05;
  }
`;
const SlopeIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 4%;
  position: absolute;
  align-items: center;
  right: 4%;
  width: 12%;
  cursor: pointer;
`;
const SlopeIconInfo = styled.span`
  flex: none;
  margin-top: 10%;
`;
const MapInfo = styled.li`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const MapInfoImg = styled.img`
  width: 80%;
  height: 200px;
  object-fit: cover;
`;
