import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";
import DropDown from "../BuildingInfo/DropDown";
import useDetectClose from "../../lib/useDetectClose";
import { buildings_info, buildings_info_num } from "../../lib/Data";
import MainIcon from "../MainIcon";

export default function SearchNav({ handleOnSubmit }) {
  const dropDownRef_conv = useRef(null);
  const inputRef = useRef(null);
  const [buildingVal, setbuildingVal] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useDetectClose(dropDownRef_conv, () => {
    setIsOpen(false);
  });

  const handleInputChange = (e) => {
    setbuildingVal(e.target.value);
  };

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    handleOnSubmit(e);
  };

  useEffect(() => {
    dropDownRef_conv.current.focus();
  }, [isOpen])

  return (
    <Header>
      <Form onSubmit={handleFormSubmit}>
        <Div>
          <Span>건물명</Span>
          <DropDownWrapper>
            <DropDown
              innerRef={dropDownRef_conv}
              isOpen={isOpen}
              setVal={setbuildingVal}
              data={buildings_info}
              data2={buildings_info_num}
              top={23}
              onChange={handleInputChange}
            />
            <Input
              readOnly
              type="text"
              name="buildingInput"
              placeholder="검색"
              ref={inputRef}
              value={buildingVal}
              autoComplete="off"
              onChange={handleInputChange}
              onKeyPress={(e) => e.preventDefault()}
              onClick={handleDropdownClick}
            />
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
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 10px;
`;

const Span = styled.span`
  font-weight: bold;
  margin: 10px;
  display: inline-block;
  font-size: 25px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  align-self: center;
  font-weight: bold;
  font-size: 20px;
  width: 3.5em;
  height: 2.25em;
  background: #ffd336;
  box-shadow: 0px 3.84px 3.84px rgba(0, 0, 0, 0.25);
  border-radius: 9.6px;
  border: 0;
`;

const Input = styled.input`
  border-radius: 15px;
  padding: 10px;
  font-size: 20px;
  border: 2.8px black solid;
  z-index: 0;
`;

const DropDownWrapper = styled.div`
  position: relative;
`;
