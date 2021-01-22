import {FETCH_POKE_BY_ID} from "../../services/pokeService";
import PokeDetailCard from "../../components/PokeDetailCard";
import withLoading from "../../HOC";
import './styles.scss'

import {useHistory} from "react-router-dom";
import React, {useEffect, useState, useMemo} from 'react'
import {
    useParams
} from "react-router-dom";
import {LOADING_TEXT, POKE_DETAIL_ERROR, SERVER_ERROR_TEXT} from "../../const";

const PokeDetail = ({loading, setLoading}) => {
    const {id} = useParams()
    const history = useHistory();
    const [error, setError] = useState({error: false, errorCode: 0});
    const [poke, setPoke] = useState();
    useEffect(() => {
        fetchPokeById()
    }, [id])

    const fetchPokeById = async () => {
        setLoading(true)
        if (id) {
            const poke = await FETCH_POKE_BY_ID(id);
            if (poke.error === false) {
                console.log(poke.data)
                setPoke(poke.data)
            } else {
                setError({error: true, errorCode: poke.errorCode})
            }
            setLoading(false)
        } else {
            history.replace("/")
        }
    }
    const renderError = useMemo(() => {
        if (error.error) {
            if (error.errorCode === 500) {
                return SERVER_ERROR_TEXT
            } else if (error.errorCode === 404) {
                return POKE_DETAIL_ERROR
            }
        }
    }, [error])
    return (
        <div>
            {error.error && <div className="pokeDetailError">{renderError}</div>}
            {loading && <div className="pokeLoading">{LOADING_TEXT}</div>}
            {(poke && error.error === false && loading === false) && <PokeDetailCard poke={poke}/>}
        </div>
    )

}
export default withLoading(PokeDetail);