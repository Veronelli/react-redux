import { combineReducers } from "redux-immutable";
import pokemonReducer from "./pokemons";
import uiReducer from "./iu";

const rootReducer = combineReducers({
    data: pokemonReducer,
    ui: uiReducer
});

export default rootReducer;