import LoadPok from "./pokemons/showloadpokemons/loadPok";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemon } from "../../Redux/actions/Actions";
import { filterCards } from "../../Redux/actions/Actions";
import { OrderPok } from "./pokemons/orderandfilter/order";
import { orderCards } from "../../Redux/actions/Actions";
import { Filtro } from "./pokemons/Filter/filter";

export default function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  const onOrder = (input) => {
    dispatch(orderCards(input));
  };
  const OnFilter = (e) => {
    dispatch(filterCards(e));
  };
  const filter = (input) => {
    dispatch(filterCards(input));
  };

  return (
    <div>
      <label>
        <OrderPok onChange={onOrder} />
      </label>
      <label>
        <select onChange={OnFilter} defaultValue="Select">
          <option value="Select">Select</option>
          <option value="API">Pokemons</option>
          <option value="BD">Pokemons Creados</option>
        </select>
      </label>
      <Filtro onChange={filter} onClick={OnFilter}></Filtro>
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
