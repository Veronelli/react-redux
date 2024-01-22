import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemons } from "../utils/api/pokeAPI";
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true))
    const pokemonsResponse = await getPokemons();
    const PokemonDetails = await Promise.all(
      pokemonsResponse.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(PokemonDetails))
    dispatch(setLoading(false))
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state
        .pokemons
        .findIndex((pokemon) => pokemon.id === action.payload);
      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { setPokemons, setFavorite } = dataSlice.actions;
export default dataSlice.reducer ;
