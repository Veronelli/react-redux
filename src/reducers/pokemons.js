import { SET_POKEMONS } from "../types/Pokemon";

const initialState = {
  pokemons: [],
};

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
      break;
    default:
      return state;
  }
}
