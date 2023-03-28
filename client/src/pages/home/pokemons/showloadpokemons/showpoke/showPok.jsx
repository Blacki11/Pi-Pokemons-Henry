import { Link, useLocation } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import "./showingpokemon.css";
import { agregarFav, eliminarFav } from "../../../../../Redux/actions/Actions";
import { useDispatch, useSelector } from "react-redux";

/* Funcion para mostrar los pokemons, las props son las propiedades que envia el loader del pokemons
   esto para un mejor entendimiento de todo y moduralizacion */
export default function ShowPok(Props) {
  const [isFav, setisFav] = useState(false);
  const pokemonFavorite = useSelector((state) => state.pokemonFavorite);
  const dispatch = useDispatch();
  const where = useLocation();

  /* Esta constante createType, funciona simple, al traer un pokemon de la db este en su TIPO difiere
de la api(en la api es un array con los nombres, y en la db es un array con objetos), por ende
si la id es un uuid, dara true y si es un numero dara false(false es api y true es db) */
  const createType = isNaN(Props.id)
    ? Props.type?.map((e, index) => (
        <span
          className={`${
            where.pathname === "/Home" ? "colortype" : "colortypeFav"
          }`}
          key={index}
        >
          {" "}
          {e.name}{" "}
        </span>
      ))
    : Props.type?.map((e, index) => (
        <span
          className={`${
            where.pathname === "/Home" ? "colortype" : "colortypeFav"
          }`}
          key={index}
        >
          {" "}
          {e}{" "}
        </span>
      ));

  //INTENTAR CAMBIAR Color SEGUN EL TIPO,

  /* Este handle detecta al darle al corazon,si este esta o no en favoritos, 
  si este esta en favorito(corazon rojo), isFav seria true, entonces procedera a eliminarlo, 
  caso contrario lo agregara(corazon blanco) */
  const handleFavorite = () => {
    if (isFav === true) {
      setisFav(false);
      dispatch(eliminarFav(Props.id));
    } else {
      setisFav(true);
      dispatch(agregarFav(Props));
    }
  };

  /* Este useEffect verifica si hay algun pokemon en favoritos, si lo hay automaticamente
pondria al isFav en true, esto paraque al cargar o por algun error se recarge la api, proceda
a  poner los pokemons en favorito(corazon rojo) */
  useEffect(() => {
    pokemonFavorite?.forEach((fav) => {
      if (fav.id === Props.id) {
        setisFav(true);
      }
    });
  }, [pokemonFavorite]);

  /* Esta constante name es para poner en mayuscula la primera letra del nobmre de los pokemons */
  const name = Props.name
    ? Props.name.charAt(0).toUpperCase() + Props.name.slice(1)
    : "loading";

  /* Esquema simple de cajas/cards pokemons, con su respectiva clases */
  return (
    <div
      className={`${
        where.pathname === "/Home" ? "cajasloadpok c1" : "cajasloadpokFav"
      }`}
    >
      {isFav ? (
        <p onClick={handleFavorite} className="pHome">
          ❤️
        </p>
      ) : (
        <p onClick={handleFavorite} className="pHome">
          🤍
        </p>
      )}

      <Link to={`/Detail/${Props.id}`} className="linkshowpok">
        <img
          className={`${
            where.pathname === "/Home" ? "showImagen" : "showImagenFav"
          }`}
          src={Props.imagen}
          alt={Props.name}
        />
        <h1>
          <span
            className={`${
              where.pathname === "/Home" ? "colorname" : "colornameFav"
            }`}
          >
            {name}
          </span>
        </h1>
        <h1>{createType}</h1>
      </Link>
    </div>
  );
}
