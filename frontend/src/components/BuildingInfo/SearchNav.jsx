import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DropDown from "../BuildingInfo/DropDown";
import useDetectClose from "../../lib/useDetectClose";
import { buildings_info, buildings_info_num } from "../../lib/Data";
import MainIcon from "../MainIcon";
export default function SerachNav({handleOnSubmit}) {
  const dropDownRef_conv = useRef(null);
  const [buildingVal, setbuildingVal] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Header>
      <MainIcon></MainIcon>
      <Form
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
      >
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
              data2={buildings_info_num}
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
  font-weight: bold;
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
  align-self: center;
  font-weight: bold;
  font-size: 20px;
  width: 70px;
  height: 45px;
  background: #FFD336;
  box-shadow: 0px 3.84px 3.84px rgba(0, 0, 0, 0.25);
  border-radius: 9.6px;
  border: 0;
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
