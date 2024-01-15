import styles from "./styles.module.css";

export default function PokemonList({ pokemons, CardComponent }) {
  return (
    <div className={styles["pokemon-list"]}>
      {pokemons.map((pokemon) => (
        <CardComponent
          key={pokemon.id}
          title={pokemon.name}
          img={pokemon.sprites.front_default}
          description={pokemon.description}
          abilities={pokemon.abilities}
        />
      ))}
    </div>
  );
}
