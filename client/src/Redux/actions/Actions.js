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
export function orderCards(pokemon) {
  return { type: ORDER, payload: pokemon };
}

// ---------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------// ---------------------------------------------------------------------------------------------------

export const getPokemon = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/pokemons");
    const pokemons = response.data;
    dispatch({ type: GETPOK, payload: pokemons });
  };
};

export const actionSearch = (character) => {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/pokemons?name=${character}`
    );
    const onlyPokemon = response.data;
    dispatch({ type: SEARCHPOK, payload: onlyPokemon });
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const idPokemons = response.data;
    dispatch({ type: DETAILS, payload: idPokemons });
  };
};
