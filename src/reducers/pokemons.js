import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../types/Pokemon";

const initialState = {
  pokemons: [],
  loading: false,
  favoritePokemons: [],
};

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_FAVORITE:
      const pokemon = state.pokemons.find(
        (_pokemon) => _pokemon.id === action.payload
      );
      const isExistInFavoritePokemon = state.favoritePokemons.findIndex(
        (_pokemon) => {
          return _pokemon.id === action.payload;
        }
      );
      if (!pokemon || isExistInFavoritePokemon >= 0) return { ...state };
      return {
        ...state,
        favoritePokemons: [...state.favoritePokemons, pokemon],
      };
    default:
      return state;
  }
}
