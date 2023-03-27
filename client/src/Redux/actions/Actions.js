import {
  ADDFAV,
  DELETEFAV,
  FILTER,
  ORDER,
  GETPOK,
  SEARCHPOK,
  DETAILS,
  RANDOMTEAM,
  RANDOM,
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
    const response = await axios
      .get(`http://localhost:3001/pokemons?name=${character}`)
      .catch(
        (err) => (
          console.log(err),
          err,
          alert(
            "Pokemon no encontrado, Recuerda el nombre del pokemon tiene que ser igual!"
          )
        )
      );
    const onlyPokemon = response.data;
    dispatch({ type: SEARCHPOK, payload: onlyPokemon });
  };
};

export const randomSearch = (id) => {
  return async function (dispatch) {
    const number1 = Math.floor(Math.random() * 152);
    const response = await axios
      .get(`http://localhost:3001/pokemons/${number1}`)
      .catch(
        (err) => (
          console.log(err),
          err,
          alert(
            "Se ah encontrado un error, por favor contacte con administracion"
          )
        )
      );
    const onlyPokemon = response.data;
    dispatch({ type: RANDOM, payload: onlyPokemon });
  };
};

export const RandomSearchTeam = () => {
  return async function (dispatch) {
    const TeamPokemon = [];
    for (let i = 0; i < 5; i++) {
      const number1 = Math.floor(Math.random() * 152);
      const response = await axios
        .get(`http://localhost:3001/pokemons/${number1}`)
        .catch(
          (err) => (
            console.log(err),
            err,
            alert(
              "Se ah encontrado un error, por favor contacte con administracion"
            )
          )
        );
      const onlyPokemon = response.data;
      console.log(onlyPokemon, "DENTRO DEL FOR");
      TeamPokemon.push(onlyPokemon);
    }
    dispatch({ type: RANDOMTEAM, payload: TeamPokemon });
    console.log(TeamPokemon, "FUERA DEL FOR TEAM OCMPLEOT");
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
    const idPokemons = response.data;
    dispatch({ type: DETAILS, payload: idPokemons });
  };
};
