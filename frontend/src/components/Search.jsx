import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Search({
  pinX,
  pinY,
  handleOnSubmit,
  destination,
  convenient,
}) {
  const navigate = useNavigate();
  const [imgSize, setImgSize] = useState(1000);
  useEffect(() => {
    const mql = window.matchMedia("(min-width:601px) and (max-width: 800px)");
    const smallestmql = window.matchMedia("(max-width: 600px)");
    function handleChange(e) {
      if (e.matches && e.media == "(max-width: 600px)") {
        setImgSize(370);
        console.log("True");
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
      <Header>
        <Icon
          id="icon"
          src="/Logo.svg"
          onClick={() => navigate("/mainPage")}
        ></Icon>
        <Form
          onSubmit={(e) => {
            handleOnSubmit(e);
          }}
        >
          <Div>
            <Span>출발지</Span>
            <Input type="text" name="" id="" />
          </Div>
          <Div>
            <Span>{convenient ? "편의시설" : "목적지"}</Span>
            <Input type="text" name="" id="" />
          </Div>
          <Button>검색</Button>
        </Form>
      </Header>
      <ImgMarkingContainer>
        <Img src="/campus_map.png" imgSize={imgSize}></Img>
        {destination && (
          <Map_Mark_Container pinX={pinX} pinY={pinY} imgSize={imgSize}>
            <img src="/MapMark.svg" alt="" />
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
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  margin-top: 15px;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  /* justify-self: center; */
`;
const Map_Mark_Container = styled.div`
  position: absolute;
  width: ${(props) => `${(props.imgSize / 700) * 20}px`};
  left: ${(props) => props && `${(props.imgSize / 700) * props.pinX}px`};
  top: ${(props) => props && `${(props.imgSize / 700) * props.pinY}px`};
  background-image: url("/Map_mark.svg");
`;
const Div = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Span = styled.span`
  margin: 10px;
  display: inline-block;
  font-size: 25px;
`;
const Button = styled.button`
  border-radius: 15px;
  align-self: center;
  font-size: 20px;
  width: 70px;
  height: 45px;
  background-color: rgb(243, 202, 89);
`;
const Input = styled.input`
  border-radius: 15px;
  padding: 10px;
  font-size: 20px;
  border: 2.8px black solid;
`;
const Icon = styled.img`
  height: 100%;
  padding-top: 10px;
  cursor: pointer;
`;
const Img = styled.img`
  display: block;
  width: ${(props) => `${props.imgSize}px`};
`;

const ImgMarkingContainer = styled.div`
  position: relative;
`;
