import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DropDown from "./DropDown";
import useDetectClose from "../lib/useDetectClose";
export default function SerachNav({ handleOnSubmit }) {
  const navigate = useNavigate();
  const dropDownRef = useRef(null);
  const [inputVal, setInputVal] = useState(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  console.log(inputVal);
  return (
    <Header>
      <Icon
        id="icon"
        src="/Logo.svg"
        onClick={() => navigate("/mainPage")}
      ></Icon>
      <Form
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
      >
        <Div>
          <Span>출발지</Span>
          <Input type="text" name="" id="" />
        </Div>
        <Div>
          <Span>편의시설</Span>
          <DropDownWrapper>
            <Input
              type="text"
              name=""
              id=""
              onClick={() => {
                setIsOpen(!isOpen);
                console.log("opened");
              }}
              value={inputVal}
            />
            <DropDown
              innerRef={dropDownRef}
              isOpen={isOpen}
              setInputVal={setInputVal}
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
