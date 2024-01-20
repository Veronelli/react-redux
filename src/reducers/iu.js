import { fromJS } from "immutable";
import { SET_LOADING } from "../types/Pokemon";

const initialState = fromJS({
  loading: false,
});

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return state.set("loading", fromJS(action.payload));
    default:
      return state;
  }
}
