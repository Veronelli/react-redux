import "./App.css";
import { Col } from "antd";
import { Searcher } from "./components/Searcher";
import PokemonCard from "./components/PokemonCard";
import PokemonList from "./components/PokemonList/PokemonList";
import {getPokemons,getPokemonDetails} from "./utils/api/pokeAPI";
import { useEffect, useState } from "react";
import { setPokemons } from "./actions";
import { connect, useSelector, useDispatch } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    const requestPokemons = async () => {
      const pokemonsResponse = await getPokemons();
      const pokemonDetailed = await Promise.all(pokemonsResponse.map(async (pokemon) => {
        const pokemonDetails = getPokemonDetails(pokemon);
        return pokemonDetails;
      
      }))
      dispatch(setPokemons(pokemonDetailed));
    };
    requestPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <h1>Pokedux</h1>
        <Searcher />
        <PokemonList CardComponent={PokemonCard} pokemons={pokemons} />
      </Col>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => {
    return dispatch(setPokemons(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
