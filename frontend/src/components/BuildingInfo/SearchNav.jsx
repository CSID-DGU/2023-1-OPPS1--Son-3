import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DropDown from "../DropDown";
import useDetectClose from "../../lib/useDetectClose";
import { buildings_info } from "../../lib/Data";
import MainIcon from "../MainIcon";
export default function SerachNav() {
  const dropDownRef_conv = useRef(null);
  const [buildingVal, setbuildingVal] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Header>
      <MainIcon></MainIcon>
      <Form>
        <Div>
          <Span>건물명</Span>
          <DropDownWrapper>
            <Input
              type="text"
              readOnly
              name="buildingInput"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              value={buildingVal}
              autoComplete="off"
              //키 사용 불가
              onKeyPress={(e) => {
                e.preventDefault();
              }}
            />
            <DropDown
              innerRef={dropDownRef_conv}
              isOpen={isOpen}
              setVal={setbuildingVal}
              data={buildings_info}
              top={23}
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
const Input = styled.input`
  border-radius: 15px;
  padding: 10px;
  font-size: 20px;
  border: 2.8px black solid;
`;
const DropDownWrapper = styled.div`
  position: relative;
`;
