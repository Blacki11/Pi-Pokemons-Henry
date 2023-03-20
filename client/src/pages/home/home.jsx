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
  }, [dispatch]);
  console.log(useEffect, "useeffectHOME");

  return (
    <div>
      <hr></hr>
      <LoadPok />
      {/* <footer>
        <h7>
          <Link to="/About">About</Link>
        </h7>
      </footer> */}
    </div>
  );
}
