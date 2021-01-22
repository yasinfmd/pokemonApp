import './styles.scss'
import {AddPoke} from "../../store/actions/pokeActions";

import React from "react";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ALREADY_CATCHED, CATH_POKE, POKE_DETAIL, SUCCESS_CATCH} from "../../const";
import withMesaj from "../../HOC/withMessage";
import {Link} from "react-router-dom";
const TypesItem = ({types}) => {
    return (
        <div className="typesSection">
            {types.length && types.map((typeItem, index) => {
                return (
                    <div className="typeItem" key={index}>
                        {typeItem.type.name}
                    </div>
                )
            })}
        </div>
    )
}
TypesItem.propTypes = {
    types: PropTypes.array
}

const PokeCard = ({name, image, types, id,showNotifiy}) => {
    const dispatch = useDispatch();
    const catchedPokes=useSelector(state=>state.poke)
    const catchPoke = (pokeId) => {
        if(catchedPokes.dexPokemons.length){
            const findedPoke=catchedPokes.dexPokemons.filter((item)=>{
                return item.id === pokeId
            })
            if(findedPoke.length){
                showNotifiy(name + " " + ALREADY_CATCHED)
                return
            }
        }
        dispatch(AddPoke({id:pokeId,name,image,types}))
        showNotifiy(name + " " + SUCCESS_CATCH,"bottom-center","success")

    }
    return (
        <div className="pokeCardContainer">
            <div className="pokeCard">
                <div className="titleSection">
                    {name}
                </div>
                <div className="imageSection">
                    <img src={image} alt={name}/>
                </div>
                <TypesItem types={types}/>

                <div className="pokeDetailLink">
                    <Link to={`poke-detail/${id}`}>
                        {POKE_DETAIL}
                    </Link>
                </div>

                <div className="catchPokemon" onClick={() => {
                    catchPoke(id)
                }}>
                    {name} - {CATH_POKE}
                </div>
                <ToastContainer />

            </div>
        </div>
    )
}
PokeCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    types: PropTypes.array,
    id: PropTypes.number,
    showNotifiy:PropTypes.func
}

export default  withMesaj(React.memo(PokeCard))

