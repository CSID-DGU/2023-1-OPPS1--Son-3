import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";
export default function SlopeIcon({ setIsSlope, isSlope, handleOnClick }) {
  const clicked = useRef();
  useEffect(() => {
    if (clicked.current) handleOnClick();
  }, [isSlope]);
  return (
    <SlopeIconWrapper
      onClick={(e) => {
        clicked.current = true;
        setIsSlope(!isSlope);
      }}
    >
      <Icon
        src={isSlope ? "/markImgs/withoutSlope.png" : "/markImgs/Slope.png"}
      />
      <SlopeIconInfo>
        {isSlope ? "경사 미반영 경로 보기" : "경사 반영 경로 보기"}
      </SlopeIconInfo>
    </SlopeIconWrapper>
  );
}
const Icon = styled.img`
  width: 70%;
  border-radius: 50%;
  &:hover {
    box-shadow: 0px 0px 2px 2px #e0dfdf;
    scale: 1.05;
  }
`;
const SlopeIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 4%;
  position: absolute;
  align-items: center;
  right: 4%;
  width: 12%;
  cursor: pointer;
`;
const SlopeIconInfo = styled.span`
  flex: none;
  margin-top: 10%;
`;
