import { ADDFAV, DELETEFAV, FILTER, ORDER, GETPOK } from "./ActionsType";
import axios from "axios";

export const agregarFav = (character) => {
  return { type: ADDFAV, payload: character };
};
export const eliminarFav = (id) => {
  return { type: DELETEFAV, payload: id };
};

export const filterCards = (status) => {
  return { type: FILTER, payload: status };
};
export function orderCards(id) {
  return { type: ORDER, payload: id };
}

// ---------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------

export const getPokemon = () => {
  return async function (dispatch) {
    const reponse = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const pokemons = reponse.data.results;
    dispatch({ type: GETPOK, payload: pokemons });
  };
};
