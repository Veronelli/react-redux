import "./App.css";
import { Col, Spin } from "antd";
import { Searcher } from "./components/Searcher";
import PokemonCard from "./components/PokemonCard";
import PokemonList from "./components/PokemonList/PokemonList";
import { getPokemons } from "./utils/api/pokeAPI";
import { useEffect } from "react";
import { getPokemonWithDetails, setLoading, setPokemons } from "./actions";
import { connect, useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  console.log(loading)
  useEffect(() => {
    const requestPokemons = async () => {
      dispatch(fetchPokemonsWithDetails());
    };
    requestPokemons();
  }, []);
  return (
    <div className="App">
      <Col
        span={8}
        offset={8}
        style={{ marginBottom: 10, display: "flex", flexDirection: "column" }}
      >
        <h1>Pokedux</h1>
        <Searcher />
        {!loading && (
          <PokemonList CardComponent={PokemonCard} pokemons={pokemons} />
        )}
        {loading && <Spin />}
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
