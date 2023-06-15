import React from "react";
import styled from "styled-components/macro";
export default function BuildingDetailConv({ setIsDetailPageConv, detailPageContentConv}) {
  if (!detailPageContentConv) {
    return (
      <BuildingContainer className="detailPage">
      <InfosContainer>
        <Key style={{ width: "100%", marginTop: "15px" }}>편의시설이 존재하지 않습니다</Key>
      </InfosContainer>
    </BuildingContainer>
    )  // Display "X" when detailPageContent is null
  }
  
  
  const info = detailPageContentConv;
  return (
    
    <BuildingContainer className="detailPage">
      <InfosContainer>
        {Object.keys(info).map((key, index) => (
          <Val key={index}>
            <b>{key}</b>
            {info[key].map((item, subIndex) => (
              <Div key={subIndex}>
                {item.location}
                <Img src={item.img}></Img>
              </Div>
            ))}
          </Val>
        ))}
      </InfosContainer>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
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
  /* align-self: flex-start; */
  flex: none;
  margin: 0;
`;
const Val = styled.p`
  margin: 0;
  white-space: pre-wrap;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`