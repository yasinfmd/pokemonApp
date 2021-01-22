import WithLoading from "../../HOC";
import {FETCH_POKE} from "../../services/pokeService";
import PokeCard from "../../components/PokeCard";
import {LOADING_TEXT, SERVER_ERROR_TEXT, SHOW_CATCHED_POKE_LIST} from "../../const";

import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";

import './styles.scss'

const Home = ({loading,setLoading}) => {
    const history=useHistory();
    const [pokeListArray, setPokeListArray] = useState([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        getPokeList()
    }, [])
    const getPokeList = async () => {
        setLoading(true)
        const pokeList = await FETCH_POKE();
        if(pokeList.error===false){
            setPokeListArray(pokeList.data)
        }else{
            setError(true)
        }
        setLoading(false)
    }
    const onNavigateCatchedPokes=()=>{
        history.push("/catched-pokes")
    }
    return (
        <div className="pokeContainer">
            <div className="catchedPokeLink" onClick={onNavigateCatchedPokes}>{SHOW_CATCHED_POKE_LIST}</div>
            {error && <div className="pokeListError">{SERVER_ERROR_TEXT}</div>}
            {loading  && <div className="pokeLoading">{LOADING_TEXT}</div>}
            <div className="pokeRow">
                {(pokeListArray.length && !loading && error ===false) && pokeListArray.map((pokeItem,index)=>{
                    return(
                        <div className="pokeCol" key={index}>
                            <PokeCard id={pokeItem.id} name={pokeItem.name} image={pokeItem.image} types={pokeItem.types} />
                        </div>
                    )
                })}

            </div>
        </div>
    )

}
export default WithLoading(Home);