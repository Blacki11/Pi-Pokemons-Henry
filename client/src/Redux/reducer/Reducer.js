import {
  DETAILS,
  GETPOK,
  SEARCHPOK,
  ORDER,
  FILTER,
  RANDOM,
  RANDOMTEAM,
  ADDFAV,
  DELETEFAV,
} from "../actions/ActionsType.js";

const inicialState = {
  pokemons: [],
  pokemonfilter: [],
  pokemonsallfavorite: [],
  pokemonFavorite: [],
};

const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADDFAV:
      return {
        ...state,
        pokemonsallfavorite: [...state.pokemonFavorite, action.payload],
        pokemonFavorite: [...state.pokemonFavorite, action.payload],
      };
    case DELETEFAV:
      return {
        ...state,
        pokemonFavorite: state.pokemonFavorite.filter(
          (borrar) => borrar.id !== action.payload
        ),
        pokemonsallfavorite: state.pokemonsallfavorite.filter(
          (borrar) => borrar.id !== action.payload
        ),
      };
    case FILTER:
      if (action.payload === "ALL") {
        const pokemons = [...state.pokemons];
        const allFavPokemon = [...state.pokemonsallfavorite];
        return {
          ...state,
          pokemonfilter: pokemons,
          pokemonFavorite: allFavPokemon,
        };
      }
      if (action.payload === "BD") {
        const filterBD = state.pokemons?.filter((BD) => BD.Created === true);
        const filterBDFav = state.pokemonsallfavorite?.filter(
          (BD) => BD.Created === true
        );
        return {
          ...state,
          pokemonfilter: filterBD,
          pokemonFavorite: filterBDFav,
        };
      } else if (action.payload === "API") {
        const filterAPI = state.pokemons?.filter(
          (API) => API.Created === false
        );
        const filterAPIFav = state.pokemonsallfavorite?.filter(
          (API) => API.Created === false
        );
        return {
          ...state,
          pokemonfilter: filterAPI,
          pokemonFavorite: filterAPIFav,
        };
      } else {
        const filterforType = state.pokemonfilter?.filter(
          (type) =>
            type.types?.sort().toString() === action.payload?.sort().toString()
        );
        const filterTypeFavorite = state.pokemonsallfavorite?.filter(
          (type) =>
            type.type?.sort().toString() === action.payload?.sort().toString()
        );

        return {
          ...state,
          pokemonfilter: filterforType,
          pokemonFavorite: filterTypeFavorite,
        };
      }

    case ORDER:
      const nameOrder = action.payload;
      if (nameOrder === "ataquemenormayor") {
        const ataquemenor = [...state.pokemonfilter].sort(
          (a, b) => a.attack - b.attack
        );
        const ataqueFav = [...state.pokemonsallfavorite].sort(
          (a, b) => a.attack - b.attack
        );
        console.log(ataqueFav, ataquemenor, "ATAQUES MAYORMENOR");
        return {
          ...state,
          pokemonfilter: ataquemenor,
          nameOrder,
          pokemonFavorite: ataqueFav,
          nameOrder,
        };
      }
      if (nameOrder === "ataquemayormenor") {
        const ataquemayor = [...state.pokemonfilter].sort(
          (a, b) => b.attack - a.attack
        );
        const ataquefavmayor = [...state.pokemonsallfavorite].sort(
          (a, b) => b.attack - a.attack
        );
        console.log(ataquefavmayor, ataquemayor, "ATAQUES MAYORMENOR");
        return {
          ...state,
          pokemonfilter: ataquemayor,
          nameOrder,
          pokemonFavorite: ataquefavmayor,
          nameOrder,
        };
      }
      if (nameOrder === "ascendente") {
        const ascendente = [...state.pokemonfilter].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        const ascendenteFav = [...state.pokemonsallfavorite].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return {
          ...state,
          pokemonfilter: ascendente,
          nameOrder,
          pokemonFavorite: ascendenteFav,
          nameOrder,
        };
      }
      if (nameOrder === "descendiente") {
        const desendente = [...state.pokemonfilter].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        const desendenteFav = [...state.pokemonsallfavorite].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        return {
          ...state,
          pokemonfilter: desendente,
          nameOrder,
          pokemonFavorite: desendenteFav,
          nameOrder,
        };
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
    case RANDOM:
      return {
        ...state,
        pokemonfilter: action.payload,
      };
    case RANDOMTEAM:
      return {
        ...state,
        pokemonfilter: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
