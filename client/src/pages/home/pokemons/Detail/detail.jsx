import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setPokemon(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setPokemon({});
  }, [id]);

  return (
    <div>
      <h1>{pokemon?.name}</h1>
      <img
        src={pokemon.sprites?.other["official-artwork"].front_default}
        alt={pokemon?.name}
      />
    </div>
  );
}
