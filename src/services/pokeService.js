import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/"
axios.defaults.baseURL = baseUrl;
const returnObject={
    isSuccess:false,
    data:[],
    error:false,
    errorCode:0
}
export  const FETCH_POKE_BY_ID=async (pokeId)=>{
    try{
        const {data}= await  axios.get(`${baseUrl}pokemon/${pokeId}`)
        const poke={
            name:data.name,
            id:data.id,
            abilities:data.abilities,
            height:data.height,
            weight:data.weight,
            stats:data.stats,
            types:data.types,
            images:[data.sprites.back_default,data.sprites.back_shiny,data.sprites.front_default,data.sprites.front_shiny]
        }
        returnObject.isSuccess=true;
        returnObject.data=poke;
        return  returnObject;
    }catch (e){
        debugger

        returnObject.isSuccess=false;
        returnObject.error=true;
        returnObject.errorCode=e.response.status;
        return returnObject;
    }

}

export const FETCH_POKE = async () => {
    try {
        const pokeListArray = [];
        const {data: {results}} = await axios.get("pokemon")
        if (results.length > 0) {
          for (const pokeItem of results) {
             const {data} = await axios.get(pokeItem.url)
              pokeListArray.push({
                  name:pokeItem.name,
                  id:data.id,
                  image:data.sprites.front_default,
                  types:data.types
              })
            }
        }
        returnObject.data=pokeListArray;
        returnObject.isSuccess=true;
        return  returnObject;
    } catch (e) {
        returnObject.isSuccess=false;
        returnObject.error=true;
        returnObject.errorCode=e.response.status;
        return returnObject;
    }

}