import {
  DETAILS,
  GETPOK,
  SEARCHPOK,
  ORDER,
  FILTER,
} from "../actions/ActionsType.js";

const inicialState = {
  pokemons: [],
  pokemonfilter: [],
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
    case FILTER:
      const filterPokemon = state.pokemons?.filter(
        (type) =>
          type.Type.sort().toString() === action.payload.sort().toString()
      );
      console.log(
        filterPokemon,
        "FILTRO",
        action.payload.sort().toString(),
        "ACTIONPAYLOAD",
        state.pokemons[0].Type.sort().toString(),
        "TIPOPOKEMON"
      );
      return {
        ...state,
        pokemonfilter: filterPokemon,
      };
    case ORDER:
      const nameOrder = action.payload;
      if (nameOrder === "Select") {
        return { ...state };
      }
      if (nameOrder === "Ascendente") {
        const ascendente = [...state.pokemons].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return { ...state, pokemonfilter: ascendente, nameOrder };
      }
      if (nameOrder === "Descendiente") {
        const desendente = [...state.pokemons].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        return { ...state, pokemonfilter: desendente, nameOrder };
      }
    case GETPOK:
      return {
        ...state,
        pokemons: action.payload,
        pokemonfilter: action.payload,
      };
    case SEARCHPOK:
      return {
        ...state,
        pokemonfilter: action.payload,
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
