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
      if (action.payload === "ALL") {
        const pokemons = [...state.pokemons];
        return { ...state, pokemonfilter: pokemons };
      }
      if (action.payload === "BD") {
        console.log("ENTRA AL BD", state.pokemons.Created);
        const filterBD = state.pokemons?.filter((BD) => BD.Created === true);
        return {
          ...state,
          pokemonfilter: filterBD,
        };
      } else if (action.payload === "API") {
        console.log("ENTRA AL API", state.pokemons.Created);
        const filterAPI = state.pokemons?.filter(
          (API) => API.Created === false
        );
        return {
          ...state,
          pokemonfilter: filterAPI,
        };
      } else {
        const filterPokemon = state.pokemonfilter?.filter(
          (type) =>
            type.Type.sort().toString() === action.payload.sort().toString()
        );
        return {
          ...state,
          pokemonfilter: filterPokemon,
        };
      }

    case ORDER:
      const nameOrder = action.payload;
      if (nameOrder === "ataquemenormayor") {
        const ataque = [...state.pokemonfilter].sort(
          (a, b) => a.attack - b.attack
        );
        return { ...state, pokemonfilter: ataque, nameOrder };
      }
      if (nameOrder === "ataquemayormenor") {
        const ataque = [...state.pokemonfilter].sort(
          (a, b) => b.attack - a.attack
        );
        return { ...state, pokemonfilter: ataque, nameOrder };
      }
      if (nameOrder === "ascendente") {
        const ascendente = [...state.pokemonfilter].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return { ...state, pokemonfilter: ascendente, nameOrder };
      }
      if (nameOrder === "descendiente") {
        const desendente = [...state.pokemonfilter].sort((a, b) =>
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
