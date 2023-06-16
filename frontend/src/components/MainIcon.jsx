import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";

export default function MainIcon() {
  const navigate = useNavigate();
  return (
    <Icon
      src="/markImgs/로고.png"
      alt="로고"
      onClick={() => {
        navigate("/mainPage");
      }}
    />
  );
}

const Icon = styled.img`
  top: 10px;
  width: 200px;
  height: auto;
  cursor: pointer;
  position: absolute;
  left: 20px;

  @media screen and (max-width: 800px) {
    top: 5px;
    width: 130px;
    max-width: 200px;
  }
`;
