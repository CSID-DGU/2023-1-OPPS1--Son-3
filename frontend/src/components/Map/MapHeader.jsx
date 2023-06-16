import React, { useRef } from "react";
import styled from "styled-components/macro";
import DropDown from "../DropDown";
import { buildings } from "../../lib/mapInfo.js";
import useDetectClose from "../../lib/useDetectClose";
import MainIcon from "../MainIcon";
import { useEffect } from "react";

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
  //넘어온 데이터가 있을 때 받아오기
  useEffect(() => {
    if (targetBuildings) {
      setArriveBuilding(targetBuildings.arrival);
      setDepartBuilding(targetBuildings.departure);
      setconvVal(targetBuildings.convVal);
    }
  }, [targetBuildings]);
  //넘어온 데이터가 있을 때 value값 생성
  const departure = targetBuildings ? targetBuildings.departure : "";
  const arrival = targetBuildings ? targetBuildings.arrival : "";
  const conv = targetBuildings ? targetBuildings.convval : "";
  const departInput = useRef(null);
  const arriveInput = useRef(null);
  const convInput = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(departInput, false);
  const [isOpen2, setIsOpen2] = useDetectClose(arriveInput, false);
  const [isOpen3, setIsOpen3] = useDetectClose(convInput, false);
  return (
    <Header>
      <MainIcon></MainIcon>
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
              defaultValue={departBuilding ? departBuilding : departure}
            />
            <DropDown
              data={buildings}
              innerRef={departInput}
              isOpen={isOpen}
              top={12}
              setVal={setDepartBuilding}
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
              onKeyPress={(e) => {
                e.preventDefault();
              }}
              defaultValue={arriveBuilding ? arriveBuilding : arrival}
            />
            <DropDown
              setVal={setArriveBuilding}
              data={buildings}
              innerRef={arriveInput}
              isOpen={isOpen2}
              top={12}
            ></DropDown>
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
  align-items: center;
  height: 75px;
  width: fill-available;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;
const Div = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  border-radius: 10px;
  padding: 5px;
  width: 150px;
  font-size: 18px;
  border: 2px black solid;
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
`;
