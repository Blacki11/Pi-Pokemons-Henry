import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar";
import { PokRandom } from "./Random/pokerandom/pokemonRandom";
import { TeamRandom } from "./Random/teampokemon/teamRandom";
import "./navcss/nav.css";

/* NavBar del proyecto, contiene los radomizers y los links a los diferentes lugares */
export default function Nav(props) {
  return (
    <div className="navcontainer navcontainer2">
      <nav className="navcontainer NavCrear">
        <ul className="navLinks">
          <li className="about">
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
          <TeamRandom></TeamRandom>
          <PokRandom></PokRandom>
          <p className="searchLI">
            <SearchBar />
          </p>
        </ul>
      </nav>
    </div>
  );
}
