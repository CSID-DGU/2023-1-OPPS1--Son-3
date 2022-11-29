import React from "react";
import styled from "styled-components";
import { ReactComponent as Map_Icon } from "../asset/Map_Icon.svg";
import { Link } from "react-router-dom";
export default function CloseConvList({ arrivalData }) {
  return (
    <Article id="convenientList">
      <h1>가까운 편의시설</h1>
      <ConvList>
        {arrivalData.map((data) => {
          return (
            <div>
              <ConvTitle>{`<${data.title}>`}</ConvTitle>
              <ConvImg src={data.img}></ConvImg>
            </div>
          );
        })}
      </ConvList>
      <Map_Icon_Container>
        <Link to={"/map"}>
          <Map_Icon width="70" height="70"></Map_Icon>
          <Map_Span>길찾기</Map_Span>
        </Link>
      </Map_Icon_Container>
    </Article>
  );
}
const Map_Icon_Container = styled.div`
  margin-left: auto;
  margin-right: 15px;
`;

const Article = styled.article`
  background-color: rgb(243, 202, 89);
  height: 100%;
  width: 300px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 2.8px black solid;
  > * {
    font-size: 25px;
    text-align: center;
  }
`;
const Map_Span = styled.span`
  display: block;
  font-size: 20px;
`;
const ConvList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: scroll;
  overflow-x: hidden;
`;
const ConvTitle = styled.h5`
  padding: 0;
  margin: 5px 0;
`;
const ConvImg = styled.img`
  width: 90%;
  height: 190px;
  border-radius: 5px;
`;
