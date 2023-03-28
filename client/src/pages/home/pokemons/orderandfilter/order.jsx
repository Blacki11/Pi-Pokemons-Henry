import React from "react";
import "./order.css";
import { useLocation } from "react-router-dom";

/* Esta funcion ordena dependiendo lo que se le indique */
export const OrderPok = ({ onChange }) => {
  const where = useLocation();

  /* Funcion detecta el ordenamiento que se le pida y aplica la funcion onchange(order en el redux) */
  const handleOrder = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  /* Al igual que el filter, dependiendo donde este, toma uno u otro css */
  return (
    <div className={`${where.pathname === "/Home" ? "caja" : "cajaFav"}`}>
      <select
        onChange={handleOrder}
        defaultValue="Ordena"
        className={`${where.pathname === "/Home" ? "select1" : "selectFav"}`}
      >
        <option value="select">Ordena</option>
        <option value="ascendente">Nombre A-Z</option>
        <option value="descendiente">Nombre Z-A</option>
        <option value="ataquemayormenor">Ataque Mayor-Menor</option>
        <option value="ataquemenormayor">Ataque Menor-Mayor</option>
      </select>
    </div>
  );
};
