import LoadPok from "./pokemons/showloadpokemons/loadPok";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemon } from "../../Redux/actions/Actions";
import { filterCards } from "../../Redux/actions/Actions";
import { OrderPok } from "./pokemons/orderandfilter/order";
import { orderCards } from "../../Redux/actions/Actions";

export default function Home(props) {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);
  const onsaveFilter = (e) => {
    const options = [...e.target.selectedOptions];
    const values = options.map((option) => option.value);
    dispatch(filterCards(values));
  };
  const onOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };

  const onFilter = () => {
    dispatch(filterCards(filter));
  };

  return (
    <div>
      <div>
        <select onChange={onOrder}>
          <option value="Select">Select</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendiente">Descendiente</option>
        </select>
      </div>
      <label>
        <select onChange={onsaveFilter} multiple>
          <option value="filtra">Filter</option>
          <option value="normal">Normal</option>
          <option value="fighting">Lucha</option>
          <option value="flying">Volador</option>
          <option value="poison">Veneno</option>
          <option value="ground">Tierra</option>
          <option value="rock">Roca</option>
          <option value="bug">Bicho</option>
          <option value="ghost">Fantasma</option>
          <option value="steel">Acero</option>
          <option value="fire">Fuego</option>
          <option value="water">Agua</option>
          <option value="grass">Planta</option>
          <option value="electric">Electrico</option>
          <option value="psychic">Psiquico</option>
          <option value="ice">hielo</option>
          <option value="dragon">dragon</option>
          <option value="createpokemon">Pokemons-Creados</option>
          <option value="apipokemon">Pokedex</option>
        </select>
      </label>
      <hr></hr>
      <LoadPok />
      {/* <footer>
        <h7>
          <Link to="/About">About</Link>
        </h7>
      </footer> */}
    </div>
  );
}
