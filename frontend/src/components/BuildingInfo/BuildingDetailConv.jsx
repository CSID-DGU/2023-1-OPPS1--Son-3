import React from "react";
import styled from "styled-components";
export default function BuildingDetailConv({ setIsDetailPageConv, detailPageContentConv}) {
  const info = detailPageContentConv;

  return (
    <BuildingContainer className="detailPage">
      <InfosContainer>
        <Key>편의시설 Test</Key>

      </InfosContainer>
    </BuildingContainer>
  );
}
const BuildingContainer = styled.div`
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  top: 20%;
  right: 0%;
  width: 19%;
  height: 80%;
  border-radius: 15px;
  padding: 10px;
`;
const InfosContainer = styled.div`
  display: flex;
  gap: 3px;
  font-size: 14px;
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;
const Img = styled.img`
  width: 80%;
  text-align: center;
  margin: 10px auto;
  border-radius: 5px;
  flex-shrink: none;
`;
const Key = styled.p`
  letter-spacing: 1.5px;
  color: black;
  font-weight: bold;
  align-self: flex-start;
  flex: none;
  margin: 0;
`;
const Val = styled.p`
  margin: 0;
  white-space: pre-wrap;
  text-align: start;
`;
