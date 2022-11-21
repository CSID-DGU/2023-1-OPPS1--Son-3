import styled from "styled-components";

import { useNavigate } from "react-router-dom";
export default function Search({
  pinX,
  pinY,
  handleOnSubmit,
  destination,
  convenient,
}) {
  const navigate = useNavigate();
  return (
    <SearchMap>
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
        <Img src="/campus_map.png"></Img>
        {destination && (
          <Map_Mark_Container pinX={pinX} pinY={pinY}>
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
  width: 20px;
  left: ${(props) => props && `${props.pinX}px`};
  top: ${(props) => props && `${props.pinY}px`};
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
`;

const ImgMarkingContainer = styled.div`
  position: relative;
  margin: 50px 0;
`;
