import React from "react";
import "./filter.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Filtro = ({ onChange, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const where = useLocation();

  const onsaveFilter = (e) => {
    e.preventDefault();
    return onChange(selected);
  };

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

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (e) => {
    const value = e.target.value;
    const index = selected.indexOf(value);
    if (index === -1) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };
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

// export const Filtro = ({ onChange }) => {
//   const onsaveFilter = (e) => {
//     e.preventDefault();
//     const options = [...e.target.selectedOptions];
//     const values = options.map((option) => option.value);
//     return onChange(values);
//   };

//   const handleFilter = (e) => {
//     e.preventDefault();
//     onChange(e.target.value);
//   };

//   console.log();

//   return (
//     <div>
//       <select className="filterselect" onChange={onsaveFilter} multiple>
//         <option className="filteroption" value="filtra">
//           Filter
//         </option>
//         <option className="filteroption" value="normal">
//           Normal
//         </option>
//         <option className="filteroption" value="fighting">
//           Lucha
//         </option>
//         <option className="filteroption" value="flying">
//           Volador
//         </option>
//         <option className="filteroption" value="poison">
//           Veneno
//         </option>
//         <option className="filteroption" value="ground">
//           Tierra
//         </option>
//         <option className="filteroption" value="rock">
//           Roca
//         </option>
//         <option className="filteroption" value="bug">
//           Bicho
//         </option>
//         <option className="filteroption" value="ghost">
//           Fantasma
//         </option>
//         <option className="filteroption" value="steel">
//           Acero
//         </option>
//         <option className="filteroption" value="fire">
//           Fuego
//         </option>
//         <option className="filteroption" value="water">
//           Agua
//         </option>
//         <option className="filteroption" value="grass">
//           Planta
//         </option>
//         <option className="filteroption" value="electric">
//           Electrico
//         </option>
//         <option className="filteroption" value="psychic">
//           Psiquico
//         </option>
//         <option className="filteroption" value="ice">
//           hielo
//         </option>
//         <option className="filteroption" value="dragon">
//           dragon
//         </option>
//       </select>
//     </div>
//   );
// };
