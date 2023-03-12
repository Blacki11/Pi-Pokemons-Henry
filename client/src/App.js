import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Inicio from './pages/inicio/inicio';
import Cards from './pages/home/pokemons/cards';
import Detail from './pages/home/Detail/detail';
import Create from './pages/createapj/create';
import About from './pages/about/about';
import Nav from './pages/nav/nav';

function App() {
  const location = useLocation();

  const showNavbar = location.pathname !== '/';
  return (
    <>
       {showNavbar && <Nav />}
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='Home' element={<Cards/>}></Route>
        <Route path='Detail' element={<Detail/>}></Route>
        <Route path='Create' element={<Create/>}></Route>
        <Route path='About' element={<About/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
