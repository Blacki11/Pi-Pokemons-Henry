import { Routes, Route, useLocation } from "react-router-dom";
import Inicio from "./pages/inicio/inicio";
import Home from "./pages/home/home";
import Detail from "./pages/home/pokemons/Detail/detail.jsx";
import Create from "./pages/createapj/create";
import About from "./pages/about/about";
import Nav from "./pages/nav/nav";
import Favorite from "./pages/favoritos/favoritos";

function App() {
  const location = useLocation();

  const showNavbar = location.pathname !== "/";
  return (
    <>
      {showNavbar && <Nav />}
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="Home" element={<Home />}></Route>
        <Route path="Detail/:id" element={<Detail />}></Route>
        <Route path="Create" element={<Create />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="Favorite" element={<Favorite />}></Route>
      </Routes>
    </>
  );
}

export default App;
