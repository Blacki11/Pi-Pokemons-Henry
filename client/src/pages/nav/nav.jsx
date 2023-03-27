import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar";
import { PokRandom } from "./Random/pokerandom/pokemonRandom";
import { TeamRandom } from "./Random/teampokemon/teamRandom";
import "./navcss/nav.css";

export default function Nav(props) {
  return (
    <div className="navcontainer navcontainer2">
      <nav className="container NavCrear">
        <ul className="navLinks">
          <li>
            <Link to="/About">About</Link>
          </li>
          <li className="fav">
            <Link to="/Favorite">Favoritos</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li className="create">
            <Link to="/Create">Crear Pokemon</Link>
          </li>
        </ul>
      </nav>
      <TeamRandom></TeamRandom>
      <PokRandom></PokRandom>
      <SearchBar />
    </div>
  );
}
