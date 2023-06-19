import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro";

export default function MainIcon() {
  // const navigate = useNavigate();
  return (
    <Icon
      alt="로고"
      onClick={() => {
        window.location.replace("/map");
        // navigate("/map");
      }}
    />
  );
}

const Icon = styled.img`
  cursor: pointer;
  @media screen and (max-width: 800px) {
  content: url('/markImgs/로고_그림.png');
    width: 30px;
    height: 30px;
  }
  @media screen and (min-width: 801px) {
  content: url('/markImgs/로고.png');
  width: 190px;
  height: 45px;
  }
`;
