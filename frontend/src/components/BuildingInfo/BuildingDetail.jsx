import React from "react";
import styled from "styled-components/macro";
export default function BuildingDetail({ setIsDetailPage, detailPageContent }) {
  if (!detailPageContent) {
    return (
      <BuildingContainer className="detailPage">
        <InfosContainer>
          <Key style={{ width: "100%", marginTop: "15px", textAlign: "center" }}>건물정보가 존재하지 않습니다.</Key>
        </InfosContainer>
      </BuildingContainer>
    ); // Display "X" when detailPageContent is null
  }

  const info = detailPageContent.info;
  return (
    <BuildingContainer className="detailPage">
      <Img src={detailPageContent.img}></Img>
      <InfosContainer>
        <Key>건물명</Key>
        <Val>{detailPageContent.name}</Val>
      </InfosContainer>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.3em",        
      }}>
        {[...info].map((item, index) => {
          const key = item[0];
          const val = item[1];
          return (
            <InfosContainer key={index}>
              <Key>{key}</Key>
              <Val>{val}</Val>
            </InfosContainer>
          );
        })}
      </div>
    </BuildingContainer>
  );
}
const BuildingContainer = styled.div`
  width: 100%;
  border-radius: 15px;
  padding: 10px;
`;
const InfosContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1em;
  font-size: 14px;
  &:not(:last-child) {
    margin-bottom: 7px;
  }
  padding-left: 0.5em;
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
  flex: none;
  margin: 0;
  width: 6.1em;
  text-align: start;
`;
const Val = styled.p`
  margin: 0;
  white-space: pre-wrap;
  text-align: start;
`;
