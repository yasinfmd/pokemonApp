import { combineReducers } from "redux";
import pokeReducer from "./pokeReducers";

export default combineReducers({
    poke: pokeReducer,
});
