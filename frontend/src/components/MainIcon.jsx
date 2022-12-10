import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
export default function MainIcon() {
  const navigate = useNavigate();
  return (
    <Icon
      src="/markImgs/Logo.svg"
      onClick={() => {
        navigate("/mainPage");
      }}
    ></Icon>
  );
}
const Icon = styled.img`
  height: 75px;
  cursor: pointer;
  position: absolute;
  left: 15px;
  top: 5px;
`;
