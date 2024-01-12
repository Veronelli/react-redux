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
import { logger } from "./middleware/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
const composedEnhacers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
  applyMiddleware(logger)
);
const store = createStore(pokemonReducer, composedEnhacers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
