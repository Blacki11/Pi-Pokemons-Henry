import { useSelector } from "react-redux";
import React from "react";
import { useDispatch } from "react-redux";
import { filterCards } from "../../Redux/actions/Actions";
import { OrderPok } from "../home/pokemons/orderandfilter/order";
import { orderCards } from "../../Redux/actions/Actions";
import { Filtro } from "../home/pokemons/Filter/filter";
import ShowPok from "../home/pokemons/showloadpokemons/showpoke/showPok";
import "../home/csshome/home.css";
import "./favoritos.css";

/* Muestra los pokemons que sean agregados a favoritos */
function Favorite() {
  const { pokemonFavorite } = useSelector((state) => state);
  const dispatch = useDispatch();

  /* Estas tres funciones son para el filtro y ordenamiento de las cartas que se encuentren en favorito */
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
    <>
      <h1 className="favoritosh1"> Pokemons Favoritos</h1>
      {/* Esta parte es un agregado simple, pero que ayuda a diferenciar mejor del simple home */}
      <h2 className="favoritosh1">
        Entrenador, aca se encuentran tus pokemons favoritos, aquellos que se
        encuentran siempre en tu equipo o simplemente los mas esteticos a tu
        gusto. Por si te lo preguntas ara agregar un pokemon, solo necesitas
        tocar en el corazon que encuentras en la home, caso que quieras sacar un
        pokemon de favorite, solo tienes que darle al corazon rojo!
      </h2>
      <div className="centrar">
        <label>
          <OrderPok onChange={onOrder} />
        </label>
        <Filtro onChange={filter} onClick={OnFilter}></Filtro>
        <label className="cajaFav">
          <select
            onChange={OnFilter}
            defaultValue="Create/NoCreate"
            className="selectFav"
          >
            <option value="Select">Create/NoCreate</option>
            <option value="API">Pokemons</option>
            <option value="BD">Pokemons Creados</option>
          </select>
        </label>
      </div>
      <div className="centrar">
        {pokemonFavorite?.map((e, index) => (
          <ShowPok
            imagen={e.imagen}
            name={e.name}
            type={e.type}
            key={index}
            id={e.id}
          />
        ))}
      </div>
    </>
  );
}

export default Favorite;
