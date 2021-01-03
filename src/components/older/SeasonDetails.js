import React from "react";
import { useSelector } from "react-redux";

import RaceCard from "./RaceCard";
import { selectSeason } from "../../ducks/seasonSlice";

const SeasonDetails = () => {
    const { races, isLoading, isError } = useSelector(selectSeason);

    const displayDetails = () => {
        if ( !races.length && !isLoading && !isError ) {
            return <p>Please select a season</p>
        }
        if (isLoading) {
            return <p>Loading, please wait..</p>
        }
        if (isError) {
            return <p>There was an error in loading..</p>
        }
        return (
            <div>
                    {races.map( race => <RaceCard key={race.round} raceName={race.raceName} circuit={race.Circuit.circuitName} date={race.date}/> )} 
            </div>
        )
    }

    return(
        <section>
            <h2>Races details:</h2>
            {displayDetails()}
        </section>
    )
}

export default SeasonDetails;