import React, { useState } from "react";
import styled, { css } from "styled-components";

const DropDown = ({ isOpen, innerRef, setVal, data, data2, top }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleInput = (e) => {
    if (setVal) setVal(e.target.textContent);
  };

  // 이름순 선택
  const selectdataName = () => {
    setSelectedOption(data);
    if (setVal) setVal(null);
  };

  // 번호순 선택
  const selectdataNum = () => {
    setSelectedOption(data2);
    if (setVal && selectedOption) {
      setVal(null);
    }
  };

  const sort = selectedOption || data;

  return (
    <Dropdown ref={innerRef} isOpen={isOpen} top={top}>
      <ButtonWrap>
        <Button onClick={selectdataName}>이름순</Button>
        <Button onClick={selectdataNum}>번호순</Button>
      </ButtonWrap>
      {sort.map((item, index) => {
        return (
          <DropdownItem
            key={index}
            onClick={(e) => {
              handleInput(e);
            }}
          >
            {item}
          </DropdownItem>
        );
      })}
    </Dropdown>
  );
};
const Dropdown = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: scroll;
  max-height: 30em;
  position: absolute;
  width: 100%;
  top: ${(props) => `${props.top}px`};
  padding: 0;
  background-color: white;
  border: 2.5px solid black;
  border-end-end-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top: unset;
  z-index: 1;
  cursor: pointer;
  ${(props) =>
    !props.isOpen &&
    css`
      visibility: hidden;
    `}
`;
const DropdownItem = styled.li`
  list-style: none;
  flex: none;
  padding: 0.75em;
  &:hover {
    background-color: rgb(243, 202, 89);
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  padding: 0.75em;
  justify-content: space-around;
`;
const Button = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  font-size: 14px;
  color: inherit;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
export default DropDown;
