import { fromJS } from "immutable";
import { SET_FAVORITE, SET_POKEMONS } from "../types/Pokemon";

const initialState = fromJS({
  pokemons: [],
});

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POKEMONS:
      return state.setIn(["pokemons"], fromJS(action.payload));
    case SET_FAVORITE:
      const currentPokemonIndex = state
        .get("pokemons")
        .findIndex((pokemon) => pokemon.get("id") === action.payload);
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
