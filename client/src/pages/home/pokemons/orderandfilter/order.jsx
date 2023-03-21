import React from "react";
import { useSelector } from "react-redux";
import LoadPok from "../showloadpokemons/loadPok";

export const OrderPok = () => {
  const pokemons = useSelector((state) => state.pokemons);

  const onOrder = (e) => {
    if (e.target.value === "Select") {
      return pokemons;
    }
    if (e.target.value === "Ascendente") {
    }
    if (e.target.value === "Descendiente") {
      pokemons.map((e) => e.name).sort((a, b) => a.localeCompare(b));
      console.log(<LoadPok></LoadPok>);
    }
  };

  return (
    <div>
      <select onChange={onOrder}>
        <option value="Select">Select</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendiente">Descendiente</option>
      </select>
    </div>
  );
};
