import {ADD_CATCH_POKE,REMOVE_CATCH_POKE} from "../../../const";

export function AddPoke(payload) {
    return { type: ADD_CATCH_POKE,payload };
}
export const RemovePoke = (payload) => {
    return { type: REMOVE_CATCH_POKE ,payload};
};
