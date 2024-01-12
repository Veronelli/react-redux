import { SET_POKEMONS } from "../types/Pokemon";

export const setPokemons = (payload)=>{
    return ({
    type: SET_POKEMONS,
    payload
})}