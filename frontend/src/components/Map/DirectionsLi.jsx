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
              (item) => {
                return (
                  <MapInfo key={item}>
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
  height: 100vh;
  width: 300px;
  border: 3px black solid;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  overflow-y: scroll;
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
