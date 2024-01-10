import styles from "./styles.module.css";

export default function PokemonList({ pokemons, CardComponent }) {
  return (
    <div className={styles["pokemon-list"]}>
      {pokemons.map((pokemon) => (
        <CardComponent
          key={pokemon.id}
          title={pokemon.name}
          img={pokemon.url}
          description={pokemon.description}
        />
      ))}
    </div>
  );
}
