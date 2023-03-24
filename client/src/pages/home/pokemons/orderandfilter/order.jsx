import React from "react";
import "./order.css";

export const OrderPok = ({ onChange }) => {
  const handleOrder = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <div className="caja1">
      <select onChange={handleOrder} defaultValue="Ordena" className="select1">
        <option value="select">Ordena</option>
        <option value="ascendente">Nombre A-Z</option>
        <option value="descendiente">Nombre Z-A</option>
        <option value="ataquemayormenor">Ataque Mayor-Menor</option>
        <option value="ataquemenormayor">Ataque Menor-Mayor</option>
      </select>
    </div>
  );
};
