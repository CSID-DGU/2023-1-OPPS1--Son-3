import NavBar from "../components/Nav";
import styled from "styled-components";
const Section = styled.section`
  background-image: url("MapBackground.svg");
  display: flex;
  flex-direction: column;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
`;
const Input = styled.input`
  padding: 20px;
  width: 250px;
  margin: 10px;
  border-radius: 30px;
  border: 3.5px black solid;
`;
const Button = styled.button`
  width: 250px;
  padding: 15px;
  border-radius: 30px;
  background-color: black;
  color: rgb(243, 220, 89);
  font-size: 20px;
  :hover {
    background-color: #4a3916;
  }
`;
const H1 = styled.h1`
  font-size: 40px;
`;
const Span = styled.span`
  position: absolute;
  left: -70px;
  top: 28px;
  font-size: 25px;
`;
const Div = styled.div`
  position: relative;
`;
const Map = () => {
  return (
    <Section className="Section">
      <NavBar></NavBar>
      <Form>
        <H1>지도</H1>
        <Div>
          <Span>출발지</Span>
          <Input type="text" name="" id="" />
        </Div>
        <Div>
          <Span>도착지</Span>
          <Input type="text" name="" id="" />
        </Div>
        <Button>검색</Button>
      </Form>
    </Section>
  );
};
export default Map;
