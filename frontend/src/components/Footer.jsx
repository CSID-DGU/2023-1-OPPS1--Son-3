import styled from "styled-components/macro";

const Footer = () => {
  return <Foot>Team: Son of Midas</Foot>;
};

export default Footer;

const Foot = styled.footer`
  background-color: #fffbee;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  text-align: center;
  width: 100%;
  bottom: 10px;
  overflow: hidden;
`;
