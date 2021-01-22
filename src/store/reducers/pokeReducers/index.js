import {ADD_CATCH_POKE, REMOVE_CATCH_POKE} from "../../../const";
// dex ? yakalanan pokemonlar
const initialState = {
    dexPokemons: []
};

export default function pokeReducer(state = initialState, action) {
    const {type,payload} = action;
    switch (type) {
        case ADD_CATCH_POKE: {
            return {...state, dexPokemons: state.dexPokemons.concat(payload)}
        }
        case REMOVE_CATCH_POKE: {
            return {...state, dexPokemons: state.dexPokemons.filter((item)=>{return item.id !== payload})}
        }
        default:
            return state;
    }
}
