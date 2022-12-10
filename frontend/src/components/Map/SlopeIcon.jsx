import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";
export default function SlopeIcon({ setIsSlope, isSlope, handleOnClick }) {
  const clicked = useRef(); //반영 안 했을 때를 위한 변수 선언
  useEffect(() => {
    if (clicked.current) handleOnClick(); //경사 버튼이 눌렸을 경우
  }, [isSlope]);
  return (
    <SlopeIconWrapper
      onClick={(e) => {
        clicked.current = true; //경사 버튼 눌림
        setIsSlope(!isSlope); //경사 반영/미 반영 으로 변환
      }}
    >
      <Icon
        src={isSlope ? "/markImgs/withoutSlope.png" : "/markImgs/Slope.png"} //경사 반영에 따른 이미지 변환
      />
      <SlopeIconInfo>
        {
          isSlope
            ? "경사 미반영 경로 보기"
            : "경사 반영 경로 보기" /*경사 반영에 따른 문구 변환*/
        }
      </SlopeIconInfo>
    </SlopeIconWrapper>
  );
}
//스타일
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
