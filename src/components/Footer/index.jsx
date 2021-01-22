import  './styles.scss'
import {NO_CATCHED_POKEMONS_FOOTER, TOTAL_CATCHED_POKE_COUNT} from "../../const";

import React from 'react'
import {useSelector} from "react-redux";

const Footer=()=>{
    const dexCount=useSelector(state=>state.poke)
    return(
        <div className="footer" data-testid="myFooter">
                <p> {dexCount.dexPokemons.length ?TOTAL_CATCHED_POKE_COUNT+  dexCount.dexPokemons.length :NO_CATCHED_POKEMONS_FOOTER }</p>
        </div>
    )
}
export  default  React.memo(Footer)