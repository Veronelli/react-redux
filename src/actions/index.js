import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../types/Pokemon";
import { getPokemonDetails } from "../utils/api/pokeAPI";

export const setPokemons = (payload) => {
  return {
    type: SET_POKEMONS,
    payload,
  };
};

export const setLoading = (payload)=>{
  return {
    type: SET_LOADING,
    payload
  }
}

export const setFavorite = (payload) => {
  return {
    type: SET_FAVORITE,
    payload,
  };  

}

export const getPokemonWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const PokemonDetails = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(PokemonDetails));
  };
