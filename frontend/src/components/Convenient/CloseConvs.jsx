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
            <div key={index}>
              <ConvTitle>{`<${data.title}>`}</ConvTitle>
              <ConvImg src={data.img}></ConvImg>
            </div>
          );
        })}
      </ConvList>
      {/* <Map_Icon_Container>
        <Link to={"/map"} state={{ departure: departure, arrival: arrival }}>
          <Map_Icon width="50" height="50"></Map_Icon>
          <Map_Span>길찾기</Map_Span>
        </Link>
      </Map_Icon_Container> */}
    </Article>
  );
}
const Map_Icon_Container = styled.div`
  margin-left: auto;
  margin-right: 15px;
  margin-top: 10px;
`;

const Article = styled.article`
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  overflow-y: scroll;
  background: #ffc370;
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
