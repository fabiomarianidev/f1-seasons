import React from "react";
import { useSelector } from "react-redux";

import SeasonSelector from "./SeasonSelector";
import RaceItem from "./RaceItem";

import { selectSeason } from "../ducks/seasonSlice";

const Sidebar = () => {
    const { season, races, isLoading, isError } = useSelector(selectSeason);
    
    const showRacesList = () => {
        if (isLoading) return <div>Loading..</div>;
        if (isError) return <div>There was an error!</div>
        const racesList = races.map( (race, index) => 
            <RaceItem 
                key={index} 
                raceName={race.raceName} 
                circuitName={race.Circuit.circuitName} 
                season={season}
                round={race.round}
            /> 
        )
        return ( <ul className="sidebar__racelist">{racesList}</ul> )
    }

    return (
        <aside className="sidebar has-shadow">
            <SeasonSelector />
            {showRacesList()}
        </aside>
    )
}

export default Sidebar;