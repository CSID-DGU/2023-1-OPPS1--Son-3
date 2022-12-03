import styled from "styled-components";
import { useState, useEffect } from "react";
export default function MapImg({
  arrivalPinX,
  arrivalPinY,
  departurePinX,
  departurePinY,
  convenient,
}) {
  const [imgSize, setImgSize] = useState(1000);
  useEffect(() => {
    const mql = window.matchMedia("(min-width:601px) and (max-width: 900px)");
    const smallestmql = window.matchMedia("(max-width: 600px)");
    function handleChange(e) {
      if (e.matches && e.media === "(max-width: 600px)") {
        setImgSize(370);
      } else if (e.matches) {
        setImgSize(600);
      } else setImgSize(1000);
    }
    mql.addEventListener("change", handleChange);
    smallestmql.addEventListener("change", handleChange);
    return () => {
      mql.removeEventListener("change", handleChange);
    };
  }, []);
  return (
    <ImgMarkingContainer>
      <Img src="/backgroundImgs/campus_map.png" imgSize={imgSize}></Img>
      {!(arrivalPinX + arrivalPinY === 0) && (
        <MapMarkContainer
          PinX={arrivalPinX}
          PinY={arrivalPinY}
          imgSize={imgSize}
        >
          <img src="/markImgs/MapMark2.svg" alt="" />
        </MapMarkContainer>
      )}
      {!(departurePinX + departurePinY === 0) && convenient && (
        <MapMarkContainer
          PinX={departurePinX}
          PinY={departurePinY}
          imgSize={imgSize}
        >
          <img src="/markImgs/MapMark.svg" alt="" />
        </MapMarkContainer>
      )}
    </ImgMarkingContainer>
  );
}

const MapMarkContainer = styled.div`
  position: absolute;
  width: ${(props) => `${(props.imgSize / 700) * 20}px`};
  left: ${(props) => props && `${(props.imgSize / 700) * props.PinX}px`};
  top: ${(props) => props && `${(props.imgSize / 700) * props.PinY}px`};
  background-image: url("/Map_mark.svg");
`;
const Img = styled.img`
  display: block;
  width: ${(props) => `${props.imgSize}px`};
`;
const ImgMarkingContainer = styled.div`
  position: relative;
`;
