import "./App.css";
import Mainpage from "./pages/Mainpage.jsx";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import Router from "./lib/router";
function App() {
  return (
    <>
      <GlobalStyle />
      <Router></Router>
    </>
  );
}

export default App;
