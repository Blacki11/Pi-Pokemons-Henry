import {
  ADDFAV,
  DELETEFAV,
  FILTER,
  ORDER,
  GETPOK,
  SEARCHPOK,
  DETAILS,
} from "./ActionsType";
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
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const pokemons = response.data.results;
    dispatch({ type: GETPOK, payload: pokemons });
  };
};

export const actionSearch = (character) => {
  return async function (dispatch) {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${character}`
    );
    const onlyPokemon = response.data;
    dispatch({ type: SEARCHPOK, payload: onlyPokemon });
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const idPokemons = response.data;
    dispatch({ type: DETAILS, payload: idPokemons });
  };
};
