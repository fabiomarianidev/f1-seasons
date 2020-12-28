import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadSeason } from "../ducks/seasonSlice";

const SeasonSelector = () => {
    const dispatch = useDispatch();
    const [ year, setYear ] = useState("");

    const handleSelectionChange = (event) =>{
        if (event.target.value !== "") setYear(event.target.value)
    }

    useEffect( () => {
        dispatch(loadSeason());
    },[dispatch])

    return(
        <div className="seasonSelector">
            <p>Choose your season:</p>
            <select onChange={handleSelectionChange} >
                <option value="">--year--</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
            </select>
        </div>
    )
}

export default SeasonSelector;