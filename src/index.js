import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import pokemonReducer from "./reducers/pokemons";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import { logger, setPokemonNumber } from "./middleware/index";
import {thunk} from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById("root"));
const customCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composedEnhacers = customCompose(
  applyMiddleware(thunk)
);

const store = createStore(pokemonReducer, composedEnhacers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
