import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar";

export default function Nav(props) {
  return (
    <div>
      <ul>
        <button>
          <Link to="/About">About</Link>
        </button>
        <button>
          <Link to="/Home">Home</Link>
        </button>
        <button>
          <Link to="/Create">Crear Pokemon</Link>
        </button>
        <SearchBar onSearch={props.onSearch} />
      </ul>
    </div>
  );
}
