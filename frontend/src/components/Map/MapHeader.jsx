import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import DropDown from "../DropDown";
import { buildings } from "../../lib/mapInfo.js";
import useDetectClose from "../../lib/useDetectClose";
import MainIcon from "../MainIcon";
import { useEffect } from "react";
import toggleButtonImage from "./토글_교내경로.png"; // Replace with the actual path to your toggle button image
import toggleButtonImage2 from "./토글_편의시설.png"; // Replace with the actual path to your second toggle button image


import { convenients } from "../../lib/Data";

export default function MapHeader({
  setArriveBuilding,
  setDepartBuilding,
  setconvVal,
  arriveBuilding,
  departBuilding,
  convVal,
  handleOnSubmit,
  targetBuildings,
}) {
  // Check for incoming data and set values accordingly
  useEffect(() => {
    if (targetBuildings) {
      setArriveBuilding(targetBuildings.arrival);
      setDepartBuilding(targetBuildings.departure);
      setconvVal(targetBuildings.convVal);
    }
  }, [targetBuildings]);

  const departure = targetBuildings ? targetBuildings.departure : "";
  const arrival = targetBuildings ? targetBuildings.arrival : "";
  const conv = targetBuildings ? targetBuildings.convval : "";
  const departInput = useRef(null);
  const arriveInput = useRef(null);
  const convInput = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(departInput, false);
  const [isOpen2, setIsOpen2] = useDetectClose(arriveInput, false);
  return (
    <Header>
      <MainIcon isMobile={true} />
      <Form onSubmit={handleOnSubmit}>
        <Div>
          <Span>출발지</Span>
          <DropDownWrapper>
            <Input
              type="text"
              name="departInput"
              ref={departInput}
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
              data={buildings}
              ref={departInput}
              isOpen={isOpen}
              top={12}
              setVal={setDepartBuilding}
            />
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
              name="arriveInput"
              ref={arriveInput}
              autoComplete="off"
              onClick={() => {
                setIsOpen2(!isOpen2);
              }}
              onKeyPress={(e) => {
                e.preventDefault();
              }}
              defaultValue={arriveBuilding || arrival}
            />
            <DropDown
              setVal={setArriveBuilding}
              data={buildings}
              ref={arriveInput}
              isOpen={isOpen2 && toggleButton}
              top={12}
            />
          </DropDownWrapper>
        </Div>
        <Div>
          <Span>편의시설</Span>
          <DropDownWrapper>
            <Input
              type="text"
              name="convInput"
              defaultValue={convVal}
              autoComplete="off"
              onClick={() => {
                setIsOpen3(!isOpen3);
              }}
              innerRef={convInput}
            />
            <DropDown
              innerRef={convInput}
              isOpen={isOpen3}
              setVal={setconvVal}
              data={convenients}
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
