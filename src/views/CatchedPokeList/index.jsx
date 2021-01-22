import './styles.scss'
import CatchedPoke from "../../components/CatchedPoke";
import {CATCHED_POKE_LIST_TITLE, NO_CATCHED_POKEMONS} from "../../const";

import React from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector} from "react-redux";

const CatchedPokeList = () => {
    const history = useHistory()
    const navigateToHome = () => {
        history.push("/")
    }
    const catchedPokes = useSelector(state=>state.poke)
    return (
        <div className="catchedPokeListContainer">
            {catchedPokes.dexPokemons.length >0 &&    <div className="catchedPokeListTitle">
                {CATCHED_POKE_LIST_TITLE}
            </div> }

            {catchedPokes.dexPokemons.length < 1 ?
                <div className="noCatchedPokeText" onClick={navigateToHome}>{NO_CATCHED_POKEMONS}</div>
                : <CatchedPoke catchedPokeList={catchedPokes.dexPokemons}/>
            }
        </div>
    )
}
export default React.memo(CatchedPokeList)