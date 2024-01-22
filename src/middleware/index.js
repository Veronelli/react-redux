const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

const newPokemon = (store) => (next) => (action) => {
  const newPokemon = { name: "PEPE" };
  const pokemonsUpdated = [newPokemon, ...action.payload];
  action.payload = pokemonsUpdated;
  next(action);
};

const setPokemonNumber = (store) => (next) => (action) => {
  action.payload = action.payload.map((pokemon, index) => ({
    ...pokemon,
    name: `${index} - ${pokemon.name}`,
  }));
  next(action);
};

const setPokemonImage = (store) => (next) => (action) => {
  action.payload = action.payload.map((pokemon, index) => ({
    ...pokemon,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
  }))
  next(action)
}

export { logger, newPokemon, setPokemonNumber, setPokemonImage };
