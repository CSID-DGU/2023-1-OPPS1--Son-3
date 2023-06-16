import styled from "styled-components/macro";
export default function MapImg({
  arrivalPinX,
  arrivalPinY,
  departurePinX,
  departurePinY,
  convenient,
}) {
  return (
    <StyledCanvas>
      <ImgMarkingContainer>
        <Img src="/backgroundImgs/map.png"></Img>
        {!(arrivalPinX + arrivalPinY === 0) && (
          <MapMarkContainer
            PinX={arrivalPinX}
            PinY={arrivalPinY}
            className="markContainer"
          >
            <img src="/markImgs/MapMark2.svg" alt="" />
          </MapMarkContainer>
        )}
        {!(departurePinX + departurePinY === 0) && convenient && (
          <MapMarkContainer
            PinX={departurePinX}
            PinY={departurePinY}
            className="markContainer"
          >
            <img src="/markImgs/MapMark.svg" alt="" />
          </MapMarkContainer>
        )}
      </ImgMarkingContainer>
    </StyledCanvas>
  );
}

export function MapImg2({ arrivalPinX, arrivalPinY, convenient }) {
  return (
    <ImgMarkingContainer>
      <Img src="/backgroundImgs/map.png"></Img>
      {!(arrivalPinX + arrivalPinY === 0) && (
        <MapMarkContainer
          PinX={arrivalPinX}
          PinY={arrivalPinY}
          className="markContainer"
        >
          <img src="/markImgs/MapMark.svg" alt="" />
        </MapMarkContainer>
      )}
    </ImgMarkingContainer>
  );
}

const MapMarkContainer = styled.div`
  position: absolute;
  width: 20px;
  left: ${(props) => props && `${props.PinX}px`};
  top: ${(props) => props && `${props.PinY}px`};
  background-image: url("/Map_mark.svg");
  @media screen and (max-width: 600px) {
    width: 0.6607rem;
    left: ${(props) => props && `${(370 / 700) * props.PinX}px`};
    top: ${(props) => props && `${(370 / 700) * props.PinY}px`};
  }
  @media screen and (min-width: 800px) {
    width: 1.7857rem;
    left: ${(props) => props && `${(1000 / 700) * props.PinX}px`};
    top: ${(props) => props && `${(1000 / 700) * props.PinY}px`};
  }
`;
const Img = styled.img`
  display: block;
  @media screen and (max-width: 600px) {
    width: 370px;
  }
  @media screen and (min-width: 800px) {
    width: 1000px;
  }
`;
const ImgMarkingContainer = styled.div`
  position: relative;
  margin: 0 auto;
`;
const StyledCanvas = styled.canvas`
  background-image: url("/backgroundImgs/map.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 80%;
  height: 80%;
  //top: -200px;
  //transform: translate(-120px, -200px);
`;
