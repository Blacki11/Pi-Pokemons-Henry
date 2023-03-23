import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderCards } from "../../../../Redux/actions/Actions";

export const OrderPok = ({ onChange }) => {
  const handleOrder = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <div>
      <select onChange={handleOrder} defaultValue="Select">
        <option value="select">Select</option>
        <option value="ascendente">Nombre A-Z</option>
        <option value="descendiente">Nombre Z-A</option>
        <option value="ataquemayormenor">Ataque Mayor-Menor</option>
        <option value="ataquemenormayor">Ataque Menor-Mayor</option>
      </select>
    </div>
  );
};
