import styled, { css } from "styled-components";

const DropDown = ({ isOpen, innerRef, setVal, data, top }) => {
  const handleInput = (e) => {
    //왜 value로는 안 먹는지.. ㅠㅠ
    if (setVal) setVal(e.target.textContent);
  };
  return (
    <Dropdown ref={innerRef} isOpen={isOpen} top={top}>
      {data.map((item) => {
        return (
          <DropdownItem
            key={item}
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
  max-height: 60vh;
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
  padding: 12px;
  &:hover {
    background-color: rgb(243, 202, 89);
  }
`;

export default DropDown;
