import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DropDown from "./DropDown";
import useDetectClose from "../lib/useDetectClose";
import { convenients, buildings } from "../lib/Data";
export default function SerachNav({ handleOnSubmit }) {
  const navigate = useNavigate();
  const dropDownRef_conv = useRef(null);
  const dropDownRef_depart = useRef(null);
  const [convVal, setconvVal] = useState(null);
  const [departVal, setDepartVal] = useState(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef_conv, false);
  const [isOpen2, setIsOpen2] = useDetectClose(dropDownRef_depart, false);
  return (
    <Header>
      <Icon
        id="icon"
        src="/markImgs/Logo.svg"
        onClick={() => navigate("/mainPage")}
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
              innerRef={dropDownRef_depart}
              onClick={() => {
                setIsOpen2(!isOpen2);
              }}
              autoComplete="off"
              value={departVal}
            />
            <DropDown
              innerRef={dropDownRef_depart}
              isOpen={isOpen2}
              setconvVal={setDepartVal}
              data={buildings}
            ></DropDown>
          </DropDownWrapper>
        </Div>
        <Div>
          <Span>편의시설</Span>
          <DropDownWrapper>
            <Input
              type="text"
              name="convInput"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              value={convVal}
              autoComplete="off"
            />
            <DropDown
              innerRef={dropDownRef_conv}
              isOpen={isOpen}
              setconvVal={setconvVal}
              data={convenients}
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
  justify-content: center;
  height: 65px;
  margin-top: 15px;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
const Span = styled.span`
  margin: 10px;
  display: inline-block;
  font-size: 25px;
`;
const Div = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  border-radius: 15px;
  align-self: center;
  font-size: 20px;
  width: 70px;
  height: 45px;
  background-color: rgb(243, 202, 89);
`;
const DropDownWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;
const Input = styled.input`
  border-radius: 15px;
  padding: 10px;
  font-size: 20px;
  border: 2.8px black solid;
`;
const Icon = styled.img`
  height: 100%;
  padding-top: 10px;
  cursor: pointer;
`;
