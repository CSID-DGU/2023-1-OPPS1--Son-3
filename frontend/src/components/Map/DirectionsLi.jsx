import React from "react";
import styled from "styled-components/macro";
export default function DirectionLi({
  submittedArrive,
  submittedDepart,
  appliedShortcut,
}) {
  return (
    <MapInfoListContainer id="DirectionList">
      <MapInfoList>
        {submittedDepart && submittedArrive
          ? appliedShortcut.current[submittedDepart][submittedArrive].map(
              (item, index) => {
                return (
                  <MapInfo key={index}>
                    <h3>{`<${item[0]}>`}</h3>
                    <div>
                      <MapInfoImg src={item[1]}></MapInfoImg>
                    </div>
                    <div>{item[2]}</div>
                  </MapInfo>
                );
              }
            )
          : null}
      </MapInfoList>
    </MapInfoListContainer>
  );
}
const MapInfoListContainer = styled.article`
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
const MapInfoList = styled.ul`
  padding: unset;
  margin: 4%;
`;
const MapInfo = styled.li`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
const MapInfoImg = styled.img`
  width: 80%;
  height: 200px;
  object-fit: cover;
`;
