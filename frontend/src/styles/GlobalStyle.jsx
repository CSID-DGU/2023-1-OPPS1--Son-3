import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@600&family=Gluten:wght@500&family=Londrina+Shadow&family=Sigmar+One&display=swap');
  *, *::before, *::after {
    box-sizing: border-box;
  }
  .Section{
    background-size: cover;
  background-repeat: no-repeat;
  height: 820px;
  width: 100vw;
  }
  *{
    font-family: "Jua", sans-serif;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{list-style-type:none}
`;

export default GlobalStyle;
