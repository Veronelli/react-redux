const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

const newPokemon = (store) => (next) => (action) => {
  const newPokemon = { name: "PEPE" };
  const pokemonsUpdated = [newPokemon, ...action.action.payload];
  action.action.payload = pokemonsUpdated;
  next(action);
};

const setPokemonNumber = (store) => (next) => (action) => {
  action.action.payload = action.action.payload.map((pokemon, index) => ({
    ...pokemon,
    name: `${index} - ${pokemon.name}`,
  }));
  next(action);
};

export { logger, newPokemon, setPokemonNumber };
