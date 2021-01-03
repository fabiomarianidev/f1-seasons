import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadSeason } from "../../ducks/seasonSlice";

// fake data to avoid fetch during development
import fakeData from "../../seasons.json";

const SeasonSelector = () => {
    const dispatch = useDispatch();
    const [ year, setYear ] = useState("");
    const [ availableSeasons, setAvailableSeasons ] = useState([]);


    const handleSelectionChange = (event) =>{
        if (event.target.value !== "") setYear(event.target.value)
    }

    useEffect( () => {
        // fake data loading to avoid fetch during development
        const seasons = fakeData.MRData.SeasonTable.Seasons.reverse().map(item => item.season);
        setAvailableSeasons(seasons);
        // const fetchSeasons = async () => {
        //     const response =  await fetch("http://ergast.com/api/f1/seasons.json?limit=100")
        //     const data = await response.json()
        //     const seasonData = await data.MRData.SeasonTable.Seasons;
        //     const seasons = seasonData.reverse().map(item => item.season);
        //     setAvailableSeasons(seasons);
        // }
        // fetchSeasons();
    },[] )

    useEffect( () => {
        if (year!=="") dispatch(loadSeason(year));
    },[dispatch, year])

    return(
        <div className="seasonSelector">
            <p>Choose your season:</p>
            <select onChange={handleSelectionChange} >
                <option value="">--year--</option>
                {availableSeasons.map(season => <option value={season}>{season}</option>)}
            </select>
        </div>
    )
}

export default SeasonSelector;