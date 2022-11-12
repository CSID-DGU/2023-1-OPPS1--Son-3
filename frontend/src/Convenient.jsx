import styled from "styled-components";

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
        <Img src="/campus_map.png"></Img>
      </SearchMap>
      <Article>
        <h1>가까운 편의시설</h1>
      </Article>
    </Section>
  );
};
export default Convenient;
const Section = styled.section`
  display: flex;
  height: 100vh;
`;
const SearchMap = styled.article`
  flex-grow: 1;
`;
const Article = styled.article`
  background-color: rgb(243, 202, 89);
  height: 100%;
  width: 300px;
  margin-left: auto;
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
  border: 2.8px black solid;
`;
const Icon = styled.img`
  height: 100%;
  /* justify-self: flex-start; */
  padding-top: 10px;
`;
const Img = styled.img`
  margin: 50px auto;
  display: block;
  scale: 1.3;
`;
