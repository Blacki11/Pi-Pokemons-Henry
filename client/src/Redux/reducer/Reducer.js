import { DETAILS, GETPOK, SEARCHPOK } from "../actions/ActionsType.js";

const inicialState = {
  pokemons: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    // case ADDFAV:
    //   return {
    //     ...state,
    //   };
    // case DELETEFAV:
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter(
    //       (borrar) => borrar.id !== action.payload
    //     ),
    //     allCharacters: state.allCharacters.filter(
    //       (borrar) => borrar.id !== action.payload
    //     ),
    //   };
    // case FILTER:
    //   const filterPokemon = state.Pokemons?.filter(
    //     (type) => type.type === action.payload
    //   );
    //   return {
    //     ...state,
    //     pokemons: filterPokemon,
    //   };
    // case ORDER:
    //   return {
    //     ...state,
    //     pokemons:
    //       action.payload === "Ascendente"
    //         ? state.Pokemons.sort((a, b) => a.id - b.id)
    //         : state.Pokemons.sort((a, b) => b.id - a.id),
    //   };
    case GETPOK:
      return {
        ...state,
        pokemons: action.payload,
      };
    case SEARCHPOK:
      return {
        ...state,
        pokemons: action.payload,
      };
    case DETAILS:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
