import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import DropDown from "../DropDown";
import { buildings } from "../../lib/mapInfo.js";
import useDetectClose from "../../lib/useDetectClose";
import MainIcon from "../MainIcon";
import { useEffect } from "react";
import toggleButtonImage from "./토글_교내경로.png"; // Replace with the actual path to your toggle button image
import toggleButtonImage2 from "./토글_편의시설.png"; // Replace with the actual path to your second toggle button image
import { convenients , buildings as buildings2} from "../../lib/Data";

export default function MapHeader({
  setArriveBuilding,
  setDepartBuilding,
  arriveBuilding,
  departBuilding,
  handleOnSubmit,
  targetBuildings,
  toggleButton,
  setToggleButton,
}) {
  // Check for incoming data and set values accordingly
  useEffect(() => {
    if (targetBuildings) {
      setArriveBuilding(targetBuildings.arrival);
      setDepartBuilding(targetBuildings.departure);
    }
  }, [targetBuildings]);

  const departure = targetBuildings ? targetBuildings.departure : "";
  const arrival = targetBuildings ? targetBuildings.arrival : "";
  const departInput = useRef(null);
  const arriveInput = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(departInput, false);
  const [isOpen2, setIsOpen2] = useDetectClose(arriveInput, false);
  // const [toggleButton, setToggleButton] = useState(false);

  const handleToggleButton = () => {
    setToggleButton(!toggleButton);
  };

  const toggleButtonImageSrc = toggleButton
    ? toggleButtonImage2
    : toggleButtonImage;
  const toggleButtonAltText = toggleButton ? "토글 버튼" : "편의시설 버튼";
  const destinationText = toggleButton ? "편의시설" : "도착지";
  const toggleName = toggleButton ? "convInput" : "arriveInput" 
  const [convVal, setconvVal] = useState("");
  const toggleDefaultValue = toggleButton ? (convVal) : (arriveBuilding || arrival)
  const toggleSetVal = toggleButton ? setconvVal : setArriveBuilding
  const toggleData = toggleButton ? convenients : buildings
  const toggleDropdown = toggleButton ?  buildings2 : buildings

  return (
    <Header>
      <MainIcon/>
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
              onKeyPress={(e) => {
                e.preventDefault();
              }}
              defaultValue={departBuilding || departure}
            />
            <DropDown
              data={toggleDropdown}
              innerRef={departInput}
              isOpen={isOpen}
              top={12}
              setVal={setDepartBuilding}
            ></DropDown>
          </DropDownWrapper>
        </Div>
        <Div>
          <Span>{destinationText}</Span>
          <ToggleButton onClick={handleToggleButton}>
            <img src={toggleButtonImageSrc} alt={toggleButtonAltText} />
          </ToggleButton>
          <DropDownWrapper>
            <Input
              type="text"
              name={toggleName}
              innerRef={arriveInput}
              autoComplete="off"
              onClick={() => {
                setIsOpen2(!isOpen2);
              }}
              onKeyPress={(e) => {
                e.preventDefault();
              }}
              defaultValue={toggleDefaultValue}
            />
            <DropDown
              setVal={toggleSetVal}
              data={toggleData}
              innerRef={arriveInput}
              isOpen={isOpen2}
              top={12}
            ></DropDown>
          </DropDownWrapper>
        </Div>
        <Button>검색</Button>
      </Form>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  height: 75px;
  width: fill-available;
  justify-content: center;
  z-index: 1;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

const Div = styled.div`
  padding: 10px;
  display: flex;
  align-items: flex-center;
`;

const Input = styled.input`
  border-radius: 10px;
  padding: 8px;
  width: 150px;
  font-size: 18px;
  border: 2px black solid;
  position: relative;
  top: 65px;
`;

const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  width: 58px;
  height: 42px;
  background: #ffd336;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 0px;
  position: relative;
  top: 65px;
`;

const DropDownWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Span = styled.span`
  font-size: 25px;
  font-weight: bold;
  display: inline-block;
  margin: 10px;
  flex-shrink: 1;
  position: relative;
  top: 65px;
`;

const ToggleButton = styled.button`
  img {
    object-fit: contain;
    width: 80px;
    position: absolute;
    top: 45px;
    transform: translateX(-85px);

    @media screen and (max-width: 800px) {
      width: 40px;
      top: 70px;
      transform: translateX(-65px);
    }
  }
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;
