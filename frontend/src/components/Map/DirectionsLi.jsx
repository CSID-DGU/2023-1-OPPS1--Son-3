import React from "react";
import styled from "styled-components";
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
  flex-shrink: 0;
  height: calc(100vh - 175px);
  width: 300px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  overflow-y: scroll;
  align-self: flex-end;
  background: #ffc370;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px 0px 0px 30px;
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
  gap: 10px;
`;
const MapInfoImg = styled.img`
  width: 80%;
  height: 200px;
  object-fit: cover;
`;