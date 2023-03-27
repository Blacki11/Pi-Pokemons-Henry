import React from "react";
import "./order.css";
import { useLocation } from "react-router-dom";

export const OrderPok = ({ onChange }) => {
  const where = useLocation();
  const handleOrder = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

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
