import styled from "styled-components";
import { useState, useEffect } from "react";
import SerachNav from "./SearchNav";
export default function Search({
  arrivalPinX,
  arrivalPinY,
  handleOnSubmit,
  destination,
  departurePinX,
  departurePinY,
}) {
  const [imgSize, setImgSize] = useState(1000);
  useEffect(() => {
    const mql = window.matchMedia("(min-width:601px) and (max-width: 900px)");
    const smallestmql = window.matchMedia("(max-width: 600px)");
    function handleChange(e) {
      if (e.matches && e.media == "(max-width: 600px)") {
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
    <SearchMap setImgSize={setImgSize}>
      <SerachNav handleOnSubmit={handleOnSubmit}></SerachNav>
      <ImgMarkingContainer>
        <Img src="/backgroundImgs/campus_map.png" imgSize={imgSize}></Img>
        {destination && (
          <Map_Mark_Container
            PinX={arrivalPinX}
            PinY={arrivalPinY}
            imgSize={imgSize}
          >
            <img src="/markImgs/MapMark2.svg" alt="" />
          </Map_Mark_Container>
        )}
        {destination && (
          <Map_Mark_Container
            PinX={departurePinX}
            PinY={departurePinY}
            imgSize={imgSize}
          >
            <img src="/markImgs/MapMark.svg" alt="" />
          </Map_Mark_Container>
        )}
      </ImgMarkingContainer>
    </SearchMap>
  );
}
const SearchMap = styled.article`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Map_Mark_Container = styled.div`
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
