import styled from "styled-components";
import NavBar from "../components/Nav";
const Section = styled.section`
  background-image: url("MainBackground.svg");
`;

const Article = styled.article`
  position: absolute;
  text-align: center;
  left: 2rem;
  top: 12rem;
`;
const Content = styled.div`
  flex-grow: 1;
  position: relative;
`;
const P = styled.p`
  letter-spacing: 3px;
  margin: 20px;
  font-size: 3.5rem;
  text-shadow: -3px 0 black, 0 2px black, 1px 0 black, 0 -1px black;
  text-shadow: -3px 0 white, 0 2px white, 1px 0 white, 0 -1px white;
  color: black;
  font-family: "Modak", cursive;
`;
const P2 = styled.p`
  letter-spacing: 9px;
  margin: 10px;
  font-size: 1.3rem;
  text-shadow: -1px 0 black, 0 2px black, 0px 0 black, 0 -1px black;
  color: white;
  text-shadow: 0 0 white, 0 2px white;
  color: black;
  font-family: "Modak", cursive;
`;
const Footer = styled.footer`
  height: 200px;
`;
function Main() {
  return (
    <>
      <Section className="Section">
        <NavBar></NavBar>
        <Content>
          <Article>
            <P>You're Webcome!</P>
            <P2>DGU Information Service</P2>
          </Article>
        </Content>
      </Section>
      <Footer></Footer>
    </>
  );
}

export default Main;
