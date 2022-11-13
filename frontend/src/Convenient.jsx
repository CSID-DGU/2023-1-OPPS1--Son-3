import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Map_Icon } from "./Map_Icon.svg";
// import { ReactComponent as Map_mark } from "./Map_mark.svg";
const Convenient = () => {
  return (
    <Section className="Section">
      <SearchMap>
        <Header>
          <Icon src="/Logo.svg"></Icon>
          <Form>
            <Div>
              <Span>건물명</Span>
              <Input type="text" name="" id="" />
            </Div>
            <Div>
              <Span>편의시설</Span>
              <Input type="text" name="" id="" />
            </Div>
            <Button>검색</Button>
          </Form>
        </Header>
        <ImgMarkingContainer>
          <Img src="/campus_map.png"></Img>
          <Map_Mark_Container>
            <img src="/MapMark.svg" alt="" />
          </Map_Mark_Container>
        </ImgMarkingContainer>
      </SearchMap>
      <Article>
        <h1>가까운 편의시설</h1>
        <Map_Icon_Container>
          <a href="https://map.naver.com/v5/directions/14137448.103699688,4517303.163985252,%EB%8F%99%EA%B5%AD%EB%8C%80%ED%95%99%EA%B5%90%20%EC%84%9C%EC%9A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4%EC%9B%90%ED%9D%A5%EA%B4%80,18696982,PLACE_POI/14137925.352620613,4517152.249204071,%EB%8F%99%EA%B5%AD%EB%8C%80%ED%95%99%EA%B5%90%20%EC%84%9C%EC%9A%B8%EC%BA%A0%ED%8D%BC%EC%8A%A4%EB%AC%B8%ED%99%94%EA%B4%80,18698347,PLACE_POI/-/walk?c=14137557.2976135,4517134.0006959,16.65,0,0,0,dh">
            <Map_Icon width="70" height="70"></Map_Icon>
          </a>
        </Map_Icon_Container>
      </Article>
    </Section>
  );
};
export default Convenient;
const Section = styled.section`
  display: flex;
  height: 100vh;
`;
const Map_Icon_Container = styled.div`
  margin-left: auto;
`;
const SearchMap = styled.article`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Article = styled.article`
  background-color: rgb(243, 202, 89);
  height: 100%;
  width: 300px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 2.8px black solid;
  > * {
    font-size: 25px;
    text-align: center;
  }
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
  /* justify-self: center; */
`;
const Map_Mark_Container = styled.div`
  position: absolute;
  width: 20px;
  left: 378px;
  top: 142px;
  background-image: url("/Map_mark.svg");
`;
const Div = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
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
  /* justify-self: flex-start; */
  padding-top: 10px;
`;
const Img = styled.img`
  display: block;
`;

const ImgMarkingContainer = styled.div`
  position: relative;
  margin: 50px 0;
`;
