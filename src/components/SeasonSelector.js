import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import { loadSeason } from "../ducks/seasonSlice";
import { getCurrentYear } from "../functions/dateFunctions";

const SeasonSelector = () => {
    const dispatch = useDispatch();

    //select last completed season as initial value
    const [ season, setSeason ] = useState(getCurrentYear() - 1);

    const handlePrevSeason = () => {
        // add check for first season
        setSeason(season - 1);
    }

    const handleNextSeason = () => {
        // only allow up to last season
        if (season < getCurrentYear() - 1) {
            setSeason(season + 1);
        }
    }

    useEffect( () => {
        dispatch(loadSeason(season));
    }, [dispatch, season] )

    return(
        <section className="seasonSelector">
            <div className="seasonSelector__year">
                <button className="seasonSelector__button" onClick={handlePrevSeason}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
                <div>{season}</div>
                <button className="seasonSelector__button" onClick={handleNextSeason}>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </div>
            <a className="seasonSelector__summary" href="/">Season Summary</a>
        </section>
    )
}

export default SeasonSelector;