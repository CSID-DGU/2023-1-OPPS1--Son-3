import styled from "styled-components";
import Footer from "../components/Footer";
import MapImg from "../components/MapImg";
export default function BuildingInfo() {
  return (
    <>
      <Container className="Section">
        <MapImg></MapImg>
        <Article>
          <Section>
            <Div>
              <Item className="selected">
                <span>건물 정보</span>
              </Item>
            </Div>
            <Content className="content"></Content>
          </Section>
        </Article>
      </Container>
      <Footer></Footer>
    </>
  );
}
const Container = styled.section`
  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
    article {
      flex-grow: 1;
      margin-left: 0;
      .content {
        flex-grow: 1;
        height: fit-content;
      }
    }
    .selected {
      display: none;
    }
  }
`;
const Article = styled.article`
  margin-left: auto;
`;
const Section = styled.section`
  display: flex;
`;
const Div = styled.div`
  height: 20vh;
  display: flex;
  margin-top: 12px;
  flex-direction: column;

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
