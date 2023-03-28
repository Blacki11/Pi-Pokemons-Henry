import LoadPok from "./pokemons/showloadpokemons/loadpok/loadPok";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemon } from "../../Redux/actions/Actions";
import { filterCards } from "../../Redux/actions/Actions";
import { OrderPok } from "./pokemons/orderandfilter/order";
import { orderCards } from "../../Redux/actions/Actions";
import { Filtro } from "./pokemons/Filter/filter";
import "./csshome/home.css";

/* La home, donde empieza todo y donde se muestran todos los pokemons */
export default function Home() {
  const dispatch = useDispatch();

  /* Llama a la bd y api para traer todos los pokemons */
  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  /* Llama a la funcion ordenar como se a explicado anteiormente */
  const onOrder = (input) => {
    dispatch(orderCards(input));
  };

  /* Llama a la funcion filtro por api o db como se a explicado anteiormente */
  const OnFilter = (e) => {
    dispatch(filterCards(e));
  };

  /* Llama a la funcion filtro por type como se a explicado anteiormente */
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
    </div>
  );
}
