import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;
const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  margin-right: 5rem;
`;
const Li = styled.li`
  list-style: none;
  padding: 1.8rem;
  font-size: 1.3rem;
  font-family: "Jua", sans-serif;
  cursor: pointer;
  &:hover {
    color: #b67e1e;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <Ul>
        <Link to="/mainPage">
          <Li>HOME</Li>
        </Link>

        <Link to="/convenient">
          <Li>편의시설</Li>
        </Link>

        <Li>건물정보</Li>
        <Link to="/to_map/">
          <Li>지도</Li>
        </Link>
      </Ul>
    </Nav>
  );
};
export default NavBar;
