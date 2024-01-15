import axios from "axios";

export function getPokemons(){
    return axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(res=>res.data.results)
    .catch(console.log)
}

export function getPokemonDetails(pokemon){
    return axios.get(pokemon.url)
    .then(res=>res.data)
    .catch(console.log)
}