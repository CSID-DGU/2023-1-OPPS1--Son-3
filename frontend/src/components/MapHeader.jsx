import React, { useRef } from "react";
import styled from "styled-components";
import DropDown from "../components/DropDown";
import { buildings } from "../lib/mapInfo.js";
import useDetectClose from "../lib/useDetectClose";
import MainIcon from "./MainIcon";
export default function MapHeader({
  setArriveBuilding,
  setDepartBuilding,
  arriveBuilding,
  departBuilding,
  handleOnSubmit,
}) {
  const departInput = useRef(null);
  const arriveInput = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(departInput, false);
  const [isOpen2, setIsOpen2] = useDetectClose(arriveInput, false);
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
  justify-content: center;
  margin: 20px;
`;
const Div = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  border-radius: 15px;
  padding: 5px;
  width: 150px;
  font-size: 18px;
  border: 2.8px black solid;
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
const Span = styled.span`
  font-size: 25px;
  display: inline-block;
  margin: 10px;
  flex-shrink: 1;
  flex: none;
`;
