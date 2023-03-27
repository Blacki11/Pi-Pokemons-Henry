import LoadPok from "./pokemons/showloadpokemons/loadpok/loadPok";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemon } from "../../Redux/actions/Actions";
import { filterCards } from "../../Redux/actions/Actions";
import { OrderPok } from "./pokemons/orderandfilter/order";
import { orderCards } from "../../Redux/actions/Actions";
import { Filtro } from "./pokemons/Filter/filter";
import "./csshome/home.css";

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
    <div className="home">
      <div className="centrar">
        <label>
          <OrderPok onChange={onOrder} />
        </label>
        <Filtro onChange={filter} onClick={OnFilter}></Filtro>
        <label className="caja">
          <select
            onChange={OnFilter}
            defaultValue="Create/NoCreate"
            className="select"
          >
            <option value="Select">Create/NoCreate</option>
            <option value="API">Pokemons</option>
            <option value="BD">Pokemons Creados</option>
          </select>
        </label>
      </div>
      <LoadPok />
      AGREGAR EL FOOTER BIEN
      {/* <footer>
        <h7>
          <Link to="/About">About</Link>
        </h7>
      </footer> */}
    </div>
  );
}
