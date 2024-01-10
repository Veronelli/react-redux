import axios from "axios";

export default function getPokemons(){
    return axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then(res=>res.data.results).catch(console.log)
}