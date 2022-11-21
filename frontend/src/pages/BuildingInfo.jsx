import styled from "styled-components";
import Footer from "../components/Footer";
import Search from "../components/Search";
export default function BuildingInfo() {
  return (
    <>
      <Container className="Section">
        <Search></Search>
        <Article>
          <Section>
            <Div>
              <Item className="selected">
                <span>건물 정보</span>
              </Item>
              <Item>
                <span>지름길 찾기</span>
              </Item>
            </Div>
            <Content></Content>
          </Section>
        </Article>
      </Container>
      <Footer></Footer>
    </>
  );
}
const Container = styled.section`
  display: flex;
`;
const Article = styled.article`
  margin-left: auto;
`;
const Section = styled.section`
  display: flex;
  align-items: center;
`;
const Div = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .selected {
    background-color: rgb(247, 214, 123);
  }
`;
const Item = styled.div`
  width: 40px;
  border: 3px black solid;
  border-right: 0px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  flex-grow: 1;
  writing-mode: vertical-lr;
  text-align: center;

  span {
    display: inline-block;
    padding: 3px;
    font-size: 23px;
  }
`;
const Content = styled.div`
  border: 3px black solid;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  height: 100vh;
  width: 300px;
`;
