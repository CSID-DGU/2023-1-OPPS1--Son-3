import React, { useState } from "react";
import styled, { css } from "styled-components/macro";

const DropDown = ({ isOpen, innerRef, setVal, data, data2, top }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (e) => {
    let value = e.target.textContent;

    if (!isNaN(value[0])) {
      value = value.substring(value.indexOf(". ") + 2);
    }

    if (setVal) setVal(value);
    setSearchValue(value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const selectdataName = () => {
    setSelectedOption(data);
  };

  const selectdataNum = () => {
    setSelectedOption(data2);
  };

  const sort = selectedOption || data;
  const filteredData = sort.filter((item) =>
    item.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Dropdown ref={innerRef} isOpen={isOpen} top={top}>
      <SearchInput
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="검색"
      />

      <ButtonWrap>
        <Button onClick={selectdataName}>이름순</Button>
        <Button onClick={selectdataNum}>번호순</Button>
      </ButtonWrap>

      <DropdownItemList>
        {filteredData.map((item, index) => {
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
      </DropdownItemList>
    </Dropdown>
  );
};

const Dropdown = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  width: 100%;
  padding: 0;
  background-color: white;
  border: 2.5px solid black;
  border-end-end-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top: unset;
  z-index: 1;
  cursor: pointer;
  ${(props) =>
    !props.isOpen &&
    css`
      visibility: hidden;
    `}
`;

const DropdownItemList = styled.div`
  max-height: 30em;
  overflow-y: scroll;
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

const Button = styled.div`
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

const SearchInput = styled.input`
  box-sizing: border-box;
  border-radius: 15px;
  padding: 10px;
  font-size: 20px;
  border: 2.8px black solid;
  margin-bottom: 10px;
  margin-left: -1%;
  margin-right: -1%;
`;

export default DropDown;
