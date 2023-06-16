import styled from "styled-components/macro";
const Footer = () => {
  return <Foot>Team of : Midas of Son</Foot>;
};
export default Footer;

const Foot = styled.footer`
  background-color: #fffbee;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  color: darkgray;
  padding: 50px;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;
