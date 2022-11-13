import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import MainPage from "./Mainpage";
import Map from "./Map";
import Convenient from "./Convenient";
import To_Map from "./To_Map";
import Main from "./Mainpage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/mainPage" />}></Route>
        <Route path="/mainPage" element={<MainPage></MainPage>}></Route>
        <Route path="/to_map/" element={<To_Map></To_Map>}></Route>
        <Route path="/map" element={<Map></Map>}></Route>
        <Route path="/convenient" element={<Convenient></Convenient>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
