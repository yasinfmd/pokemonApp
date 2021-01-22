import './styles.scss'
import {
    BACK_HOME,
    POKE_DETAIL_ABILITIES,
    POKE_DETAIL_HEIGHT,
    POKE_DETAIL_IMAGES, POKE_DETAIL_STATS,
    POKE_DETAIL_SUMMARY,
    POKE_DETAIL_TYPES, POKE_DETAIL_WEIGHT
} from "../../const";

import PropTypes from 'prop-types';
import React from 'react'
import ProgressBar from "../ProgressBar";
import {Link} from "react-router-dom";

const PokeDetailCard = ({poke}) => {
    return (
        <>
                <Link to={"/"}  className="goBack">
                    {BACK_HOME}
                </Link>
        <div className="pokeDetailContainer">

            <div className="pokeDetailImages">
                <div className="pokeDetailImagesTitle"> {poke && poke.name + " " + POKE_DETAIL_IMAGES}</div>
                {poke && poke.images.map((item, index) => {
                    return (
                        <div className="pokeImageContainer" key={index}>
                            <img src={item} alt={item}/>
                        </div>
                    )
                })}

            </div>
            <div className="pokeDetailInfoArea">
                <div className="pokeDetailSummaryTitle">{poke && poke.name + " " +POKE_DETAIL_SUMMARY}</div>
                <div className="pokeDetailSummaryArea">
                    <div className="pokeDetailAbilitiesSection">
                        <div className="pokeDetailAbilitiesTitle">
                            {POKE_DETAIL_ABILITIES} :
                        </div>
                        <div className="pokeDetailAbilities">
                            {poke && poke.abilities.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {index !== poke.abilities.length -1 ?item.ability.name+",":item.ability.name }
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className="pokeDetailTypesSection">
                        <div className="pokeDetailTypesTitle">
                            {POKE_DETAIL_TYPES} :
                        </div>
                        <div className="pokeDetailTypes">
                            {poke && poke.types.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {index !== poke.types.length -1 ?item.type.name+",":item.type.name }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/*   */}

                    <div className="pokeInfoSection">
                        <div className="pokeInfoHeader">
                            {POKE_DETAIL_HEIGHT} :
                        </div>
                        <div className="pokeInfo">
                            {poke && poke.height}
                        </div>

                        <div className="pokeInfoHeader">
                            {POKE_DETAIL_WEIGHT} :
                        </div>
                        <div className="pokeInfo">
                            {poke && poke.weight}
                        </div>
                    </div>
                </div>
                <div className="pokeDetailStatsArea">
                    <div className="pokeDetailStatsTitle">
                        {POKE_DETAIL_STATS}
                    </div>
                    {poke && poke.stats.map((item,index)=>{
                        return(
                            <div className="pokeDetailStats" key={index}>
                                <div className="pokeStatsName">
                                    {item.stat.name}
                                </div>
                                <div className="pokeStatsProgress">
                                    <ProgressBar percent={item.base_stat} />
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
            </>
    )
}
PokeDetailCard.propTypes = {
    poke: PropTypes.shape({
        id: PropTypes.number,
        name:PropTypes.string,
        height: PropTypes.number,
        weight: PropTypes.number,
        images: PropTypes.arrayOf(PropTypes.string),
        abilities: PropTypes.arrayOf(PropTypes.shape({
            slot: PropTypes.number,
            is_hidden: PropTypes.bool,
            ability: PropTypes.shape({
                name: PropTypes.string,
                url: PropTypes.string
            })

        })),
        stats: PropTypes.arrayOf(PropTypes.shape({
            base_stat: PropTypes.number,
            effort: PropTypes.number,
            stat: PropTypes.shape({
                name: PropTypes.string,
                url: PropTypes.string
            })
        })),
        types: PropTypes.arrayOf(PropTypes.shape({
            slot: PropTypes.number,
            type: PropTypes.shape({
                name: PropTypes.string,
                url: PropTypes.string
            })
        }))
    })
}
export default React.memo(PokeDetailCard);