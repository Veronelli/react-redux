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

const setPokemonImage = (store) => (next) => (action) => {
  action.action.payload = action.action.payload.map((pokemon, index) => ({
    ...pokemon,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
  }))
  console.log(action.action.payload)
  next(action)
}

export { logger, newPokemon, setPokemonNumber, setPokemonImage };
