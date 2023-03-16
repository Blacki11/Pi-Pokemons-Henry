import { ADD_FAV, DELETE_FAV, FILTER, ORDER } from "../actions/ActionsType";

const inicialState = {
  Pokemons: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
      };
    case DELETE_FAV:
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
      const allCharacterFilter = state.allCharacters?.filter(
        (gender) => gender.gender === action.payload
      );
      return {
        ...state,
        myFavorites: allCharacterFilter,
      };
    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente"
            ? state.allCharacters.sort((a, b) => a.id - b.id)
            : state.allCharacters.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
