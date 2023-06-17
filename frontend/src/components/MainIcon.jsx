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
        navigate("/map");
      }}
    />
  );
}

const Icon = styled.img`
  top: 20px;
  width: 225px;
  height: auto;
  cursor: pointer;
  position: absolute;
  left: 30px;

  @media screen and (max-width: 800px) {
    top: 5px;
    width: 130px;
    max-width: 200px;
  }
`;
