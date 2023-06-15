import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//모든 필요한 페이지에 사용될 메인 아이콘
export default function MainIcon() {
  const navigate = useNavigate();
  return (
    <Icon
      id="icon"
      src="/markImgs/Logo.png"
      onClick={() => {
        navigate("/mainPage"); //클릭 시, 메인 페이지로 이동
      }}
    ></Icon>
  );
}
const Icon = styled.img`
  width: 135px;
  height: auto;
  cursor: pointer;
  position: absolute;
  left: 15px;
  /* top: 5px; */
`;
