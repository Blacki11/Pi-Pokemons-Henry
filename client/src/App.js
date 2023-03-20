import { Routes, Route, useLocation } from "react-router-dom";
import Inicio from "./pages/inicio/inicio";
import Home from "./pages/home/home";
import Detail from "./pages/home/pokemons/Detail/detail.jsx";
import Create from "./pages/createapj/create";
import About from "./pages/about/about";
import Nav from "./pages/nav/nav";

function App() {
  const location = useLocation();

  const showNavbar = location.pathname !== "/";
  return (
    <>
      {showNavbar && <Nav />}
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="detail/:id" element={<Detail />}></Route>
        <Route path="create" element={<Create />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
