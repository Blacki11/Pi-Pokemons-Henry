import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { randomSearch } from "../../../../Redux/actions/Actions";
import "./pokemon.css";

/* Funcion para traer un pokemon random */
export const PokRandom = () => {
  const dispatch = useDispatch();

  /* Hace la request al back para traer exclusivamente un unico pokemon aleatorio */
  const onClick = (e) => {
    e.preventDefault();
    dispatch(randomSearch());
  };

  return (
    <a className="buttonrandom">
      <button type="submit" onClick={onClick}>
        <Link to="/Home">Pokemon Aleatorio</Link>
      </button>
    </a>
  );
};
