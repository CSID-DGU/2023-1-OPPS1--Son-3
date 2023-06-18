import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as Map_Icon } from "../../asset/Map_Icon.svg";
import { Link } from "react-router-dom";
export default function CloseConvList({ arrivalData, arrival, departure }) {
  return (
    <Article id="convenientList">
      {/* <h1>가까운 편의시설</h1> */}
      <ConvList>
        {arrivalData.map((data, index) => {
          return (
            <ConvInfo key={index}>
              <ConvTitle>{`<${data.title}>`}</ConvTitle>
              <ConvImg src={data.img}></ConvImg>
            </ConvInfo>
          );
        })}
      </ConvList>
    </Article>
  );
}
const Article = styled.article`
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  overflow-y: scroll;
  background: #ffd336;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 800px) {
    border-radius: 30px 0px 0px 0px;
  }
  @media screen and (min-width: 801px) {
    border-radius: 30px 0px 0px 30px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  position: relative;
  z-index: 1;
`;
const ConvList = styled.ul`
  padding: unset;
`;
const ConvInfo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  margin-bottom: 15px;
`;
const ConvTitle = styled.h5`
  padding: 0;
  margin: 5px 0;
  gap: 10px;
`;
const ConvImg = styled.img`
  width: 80%;
  height: 200px;
  object-fit: cover;
`;
