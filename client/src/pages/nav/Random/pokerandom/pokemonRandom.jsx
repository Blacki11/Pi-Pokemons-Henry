import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { randomSearch } from "../../../../Redux/actions/Actions";
import "./pokemon.css";
export const PokRandom = () => {
  const dispatch = useDispatch();

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
