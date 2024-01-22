import { combineReducers } from "redux";
import dataReducer from "../slices/dataSlice";
import dataUI from "../slices/uiSlice";

const rootReducer = combineReducers({
    data: dataReducer,
    ui: dataUI
    });

export default rootReducer;