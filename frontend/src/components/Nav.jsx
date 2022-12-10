import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 550px) {
    justify-content: center;
    li {
      font-size: 1rem;
      padding: 1.2rem;
    }
    ul {
      margin: 0;
    }
  }
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
        <Link to="/buildingInfo">
          <Li>건물정보</Li>
        </Link>
        <Link to="/map/">
          <Li>교내 경로</Li>
        </Link>
      </Ul>
    </Nav>
  );
};

export default NavBar;
