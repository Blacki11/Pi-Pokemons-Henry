import React from "react";
import "./filter.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

/* Funcion Filtro por tipos para los pokemons */
export const Filtro = ({ onChange, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const where = useLocation();

  /* Funcion para el boton filtrar, aplica el filtro por tipos a los pokemns */
  const onsaveFilter = (e) => {
    e.preventDefault();
    return onChange(selected);
  };

  /* Funcion para limpiar el filtro */
  const cleanign = (e) => {
    e.preventDefault();
    onClick(e.target.value);
    setSelected([]);
    const checkboxes = document.querySelectorAll(
      '.multiselect-options1 input[type="checkbox"]'
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  /* La misma funcion de antes, si al darle click esta abierto la interfaz para ver los tipos, entonces
     la cerrara, caso contrario la abrira(true abierta y false cerrada) */
  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  /* Como antes, y reciclando funciones, esta manda al estado los pokemons seleccionados para despues
     aplicarlos como filtro */
  const handleOptionClick = (e) => {
    const value = e.target.value;
    const index = selected.indexOf(value);
    if (index === -1) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };

  /* y volvemos con un tipico html, aunque un detalle a tener en cuenta, al usar la misma funcion en favorite
     y en la home, tome prestado el css y usando uselocation tomara cierto css o uno distinto */
  return (
    <div
      className={`${
        where.pathname === "/Home" ? "multiselect1" : "multiselect1Fav"
      }`}
    >
      <button
        onClick={onsaveFilter}
        className={`${
          where.pathname === "/Home" ? "multiselect1" : "multiselect1Fav"
        }`}
      >
        Filtrar
      </button>
      <button
        onClick={cleanign}
        value="ALL"
        className={`${
          where.pathname === "/Home" ? "multiselect1" : "multiselect1Fav"
        }`}
      >
        Limpiar Filtro{" "}
      </button>
      <div
        className={`${
          where.pathname === "/Home"
            ? "multiselect-header1"
            : "multiselect-header1Fav"
        }`}
        onClick={toggleOptions}
      >
        <span>Selecciona las opciones:</span>
        <span>{selected.join(", ") || ""}</span>
      </div>
      <ul
        className={`${
          where.pathname === "/Home"
            ? "multiselect-options1 " + [isOpen ? "open" : ""]
            : "multiselect-options1Fav " + [isOpen ? "open" : ""]
        }`}
      >
        <li>
          <label>
            <input type="checkbox" value="normal" onClick={handleOptionClick} />
            Normal
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              value="fighting"
              onClick={handleOptionClick}
            />
            Lucha
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="flying" onClick={handleOptionClick} />
            Volador
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="poison" onClick={handleOptionClick} />
            Veneno
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="ground" onClick={handleOptionClick} />
            Tierra
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="rock" onClick={handleOptionClick} />
            Roca
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="bug" onClick={handleOptionClick} />
            Bicho
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="ghost" onClick={handleOptionClick} />
            Fantasma
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="steel" onClick={handleOptionClick} />
            Acero
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="fire" onClick={handleOptionClick} />
            Fuego
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="water" onClick={handleOptionClick} />
            Agua
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="grass" onClick={handleOptionClick} />
            Planta
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              value="electric"
              onClick={handleOptionClick}
            />
            Electrico
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              value="psychic"
              onClick={handleOptionClick}
            />
            Psiquico
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="ice" onClick={handleOptionClick} />
            Hielo
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" value="dragon" onClick={handleOptionClick} />
            Dragon
          </label>
        </li>
      </ul>
    </div>
  );
};
