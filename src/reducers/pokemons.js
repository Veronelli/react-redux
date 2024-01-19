import { fromJS } from "immutable";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../types/Pokemon";

const initialState = fromJS({
  pokemons: [],
  loading: false,
  favoritePokemons: [],
});

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POKEMONS:
      // return {
      //   ...state,
      //   pokemons: action.payload,
      // };
      return state.setIn(["pokemons"], fromJS(action.payload));
    case SET_LOADING:
      return state.set("loading", fromJS(action.payload));
    case SET_FAVORITE:
      const currentPokemonIndex = state
        .get("pokemons")
        .findIndex((pokemon) => pokemon.get("id") === action.payload);
      console.log(currentPokemonIndex)
        if (currentPokemonIndex <= 0) return state;
      const isFavorite = state.getIn([
        "pokemons",
        currentPokemonIndex,
        "favorite",
      ]);
      return state.setIn(['pokemons', currentPokemonIndex, 'favorite'],!isFavorite);
    default:
      return state;
  }
}
