import './styles.scss'
import {RemovePoke} from "../../store/actions/pokeActions";
import {BACK_HOME, FAVORITE_POCKES, RELEASE_CATCHED_POKE, REMOVE_FAVORITE, SUCCESS_RELEASE} from "../../const";
import withMesaj from "../../HOC/withMessage";

import React,{useState} from 'react'
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {ToastContainer} from "react-toastify";
import {Link} from "react-router-dom";

const StartIcon=()=>{
    return(
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"
             strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
            <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
    )
}

const CatchedPoke = ({catchedPokeList, showNotifiy}) => {
    const dispatch = useDispatch();
    const [favoritePokeList,setFavoritePokeList]=useState([])
    const releasePoke = (pokeId, pokeName) => {
        dispatch(RemovePoke(pokeId))
        if(favoritePokeList.length){
            setFavoritePokeList(favoritePokeList.filter((item)=>{return item.id !== pokeId}))
        }
        showNotifiy(pokeName + " " + SUCCESS_RELEASE, "bottom-center", "error")
    }

    const addFavoritePoke=(poke)=>{
            if(!favoritePokeList.length){
                setFavoritePokeList([...favoritePokeList,poke])
            }else{
                const finded=favoritePokeList.filter((item)=>{
                    return item.id === poke.id
                })
                if(finded.length){
                    return
                }
                setFavoritePokeList([...favoritePokeList,poke])
            }
    }

    const removeFavoritePoke=(pokeId)=>{
        setFavoritePokeList(favoritePokeList.filter((item)=>{return item.id !== pokeId}))
    }
    return (
        <>
            <Link to={"/"}  className="goBack">
                {BACK_HOME}
            </Link>
            {catchedPokeList && catchedPokeList.map((item, index) => {
                return (
                    <div className="catchedPokeContainer" key={index}>
                        <div className="catchedList">
                            <div className="idSection">
                                #{item.id}
                            </div>
                            <div className="imageSection">
                                <img src={item.image} alt={item.name}/>
                            </div>
                            <div className="nameSection">
                                {item.name}
                            </div>
                        </div>

                        <div className="typesSection">
                            {item.types && item.types.map((typeItem, index) => {
                                return (
                                    <div className="catchedPokeTypeItem" key={index}>
                                        {typeItem.type.name}
                                    </div>
                                )
                            })}
                        </div>

                        <div className="actionSection">
                            <div className="actionFavorite" onClick={()=>{
                                addFavoritePoke(item)
                            }}>
                                <StartIcon />
                            </div>
                            <div className="actionSectionDelete" onClick={() => {
                                releasePoke(item.id, item.name)
                            }}>
                                {RELEASE_CATCHED_POKE}
                            </div>
                        </div>

                    </div>

                )
            })}
            {(favoritePokeList.length > 0 )&&  <div className="favoritePokeTitle">{FAVORITE_POCKES}</div> }


            {(favoritePokeList.length > 0 ) && favoritePokeList.map((item, index) => {
                return (
                    <div className="catchedPokeContainer" key={index}>
                        <div className="catchedList">
                            <div className="idSection">
                                #{item.id}
                            </div>
                            <div className="imageSection">
                                <img src={item.image} alt={item.name}/>
                            </div>
                            <div className="nameSection">
                                {item.name}
                            </div>
                        </div>

                        <div className="typesSection">
                            {item.types && item.types.map((typeItem, index) => {
                                return (
                                    <div className="catchedPokeTypeItem" key={index}>
                                        {typeItem.type.name}
                                    </div>
                                )
                            })}
                        </div>

                        <div className="actionSection">
                            <div className="actionSectionDelete" onClick={()=>{
                                removeFavoritePoke(item.id)
                            }} >
                                {REMOVE_FAVORITE}
                            </div>
                        </div>

                    </div>

                )
            })}
            <ToastContainer/>
        </>
    )

}
CatchedPoke.propTypes = {
    showNotifiy: PropTypes.func,
    catchedPokeList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
        types: PropTypes.array
    }))
}

export default withMesaj(React.memo(CatchedPoke))