import { SET_POKEMONS } from "../types/Pokemon";

export const setPokemons = (payload)=>{
    console.log(payload)
    return ({
    type: SET_POKEMONS,
    payload
})}