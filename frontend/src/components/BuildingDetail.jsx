import React from "react";
import styled from "styled-components";
export default function BuildingDetail({ setIsDetailPage, detailPageContent }) {
  const info = detailPageContent.info;
  return (
    <BuildingContainer>
      <CloseDetailPage
        onClick={() => {
          setIsDetailPage(false);
        }}
      >
        X
      </CloseDetailPage>
      <Img src={detailPageContent.img}></Img>
      <InfosContainer>
        <Key>건물명:</Key>
        <Val>{detailPageContent.name}</Val>
      </InfosContainer>
      <div>
        {[...info].map((item) => {
          const key = item[0];
          const val = item[1];
          return (
            <InfosContainer>
              <Key>{key}:</Key>
              <Val>{val}</Val>
            </InfosContainer>
          );
        })}
      </div>
    </BuildingContainer>
  );
}
const BuildingContainer = styled.div`
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  top: 40%;
  left: 40%;
  width: 600px;
  border: 0.1875rem black solid;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  background-color: #ffffffe8;
  padding: 10px;
`;
const CloseDetailPage = styled.span`
  padding: 5px;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 5px;
`;
const InfosContainer = styled.div`
  display: flex;
  gap: 3px;
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;
const Img = styled.img`
  width: 50%;
  text-align: center;
  margin: 10px auto;
  border-radius: 5px;
  flex-shrink: none;
`;
const Key = styled.p`
  letter-spacing: 1.5px;
  color: rgb(240, 203, 109);
  text-shadow: -1.5px 0 black, 0 1.5px black, 1px 0 black, 0 -1px black;
  align-self: flex-start;
  flex: none;
  margin: 0;
`;
const Val = styled.p`
  margin: 0;
  white-space: pre-wrap;
  text-align: start;
`;
