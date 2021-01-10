import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";


import { loadSeason, selectSeason } from "../ducks/seasonSlice";
import { getCurrentYear } from "../functions/dateFunctions";

import SeasonModal from "./SeasonModal";

const SeasonSelector = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { season } = useSelector(selectSeason);

    const [ modalIsVisible, setModalIsVisible ] = useState(false);

    const handlePrevSeason = () => {
        // add check for first season
        dispatch( loadSeason((season - 1)));
        history.push("/");
    }

    const handleNextSeason = () => {
        // only allow up to last season
        if (season < getCurrentYear() - 1) {
            dispatch(loadSeason(season + 1));
            history.push("/");
        }
    }

    const handleSeasonOnClick = () => {
        setModalIsVisible(!modalIsVisible);
    } 

    useEffect( () => {
        if ( season === 0 ) 
            dispatch(loadSeason((getCurrentYear() - 1)));
    }, [dispatch, season] )

    return(
        <>
            <section className="seasonSelector">
                <div className="seasonSelector__year">
                    <button className="seasonSelector__button" onClick={handlePrevSeason}>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </button>
                    <div onClick={handleSeasonOnClick}>{season}</div>
                    <button className="seasonSelector__button" onClick={handleNextSeason}>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </button>
                </div>
                <Link className="seasonSelector__summary" to="/">Season Summary</Link>
                { modalIsVisible && <SeasonModal handleClose={handleSeasonOnClick}/> }
            </section>

        </>
    )
}

export default SeasonSelector;