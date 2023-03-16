import LoadPok from "./pokemons/showloadpokemons/loadPok";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemon } from "../../Redux/actions/Actions";
import { Link } from "react-router-dom";

export default function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon());
  }, []);

  return (
    <div>
      <h1> POKEMONS </h1>
      <hr></hr>
      <LoadPok />
      <footer>
        <h7>
          <Link to="/About">About</Link>
        </h7>
      </footer>
    </div>
  );
}
