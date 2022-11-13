import styled from "styled-components";
import { Outlet } from "react-router-dom";
const Map = () => {
  return (
    <section className="Section">
      <Header>
        <Icon src="/Logo.svg"></Icon>
        <Form>
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
      </Header>
    </section>
  );
};
export default Map;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 75px;
  padding-bottom: 30px;
  margin-top: 25px;
  justify-content: center;
  border-bottom: 3px #fed76a solid;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;
const Div = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  font-size: 35px;
  display: inline-block;
  margin: 10px;
  flex-shrink: 1;
`;
const Input = styled.input`
  border-radius: 15px;
  padding: 15px;
  width: 250px;
  font-size: 20px;
  border: 2.8px black solid;
`;
const Icon = styled.img`
  height: 75px;
  /* justify-self: flex-start; */
`;
const Button = styled.button`
  border-radius: 15px;
  font-size: 20px;
  width: 90px;
  height: 45px;
  color: white;
  background-color: black;
`;
