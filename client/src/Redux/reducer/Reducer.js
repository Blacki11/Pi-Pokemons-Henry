import {
  ADDFAV,
  DELETEFAV,
  FILTER,
  GETPOK,
  ORDER,
} from "../actions/ActionsType.js";

const inicialState = {
  pokemons: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADDFAV:
      return {
        ...state,
      };
    case DELETEFAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (borrar) => borrar.id !== action.payload
        ),
        allCharacters: state.allCharacters.filter(
          (borrar) => borrar.id !== action.payload
        ),
      };
    case FILTER:
      const Pokemons = state.Pokemons?.filter(
        (type) => type.type === action.payload
      );
      return {
        ...state,
        myFavorites: Pokemons,
      };
    case ORDER:
      return {
        ...state,
        Pokemons:
          action.payload === "Ascendente"
            ? state.Pokemons.sort((a, b) => a.id - b.id)
            : state.Pokemons.sort((a, b) => b.id - a.id),
      };
    case GETPOK:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
