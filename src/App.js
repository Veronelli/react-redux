import "./App.css";
import { Col } from "antd";
import { Searcher } from "./components/Searcher";
import PokemonCard from "./components/PokemonCard";
import PokemonList from "./components/PokemonList/PokemonList";
import getPokemons from "./utils/api/pokeAPI";
import { useEffect, useState } from "react";
import { setPokemons as setPokemonsAction } from "./actions";
import { connect } from "react-redux";

function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const requestPokemons = async () => {
      const pokemonsResponse = await getPokemons();
      setPokemons(pokemonsResponse);
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
    console.log(value)
    return dispatch(setPokemonsAction(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
