import React, { useState, useEffect } from "react";

import RaceResults from "./RaceResults";
import StandingsAfterRace from "./StandingsAfterRace";

const RaceDetails = ({ match }) => {
    const { params: { race } } = match;

    const [ results, setResults ] = useState([]);
    const [ raceName, setRaceName ] = useState("");
    const [ circuit, setCircuit ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ date, setDate ] = useState("");
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isError, setIsError ] = useState(false);

    const season = race.slice(0,4);
    const round = race.slice(4,6);
    const link = `http://ergast.com/api/f1/${season}/${round}/results.json`;

    useEffect( () => {
        const fetchDetails = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(link);
                const responseJson = await response.json();
                const data = await responseJson.MRData.RaceTable.Races[0];
                setResults(data.Results);
                setRaceName(data.raceName);
                setCircuit(data.Circuit.circuitName);
                setLocation(data.Circuit.Location.locality);
                setDate(data.date);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
            }
        }
        fetchDetails();
    }, [race, link] )

    const renderResults = () => {
        if (isLoading) return <p>Loading..</p>
        if (isError) return <p>There was an error</p>
        return(
            <>
                <header className="details__header">
                    <p>Results for the {season} {raceName}</p>
                </header>
                <div className="details__mainContent">
                    <div className="details__race">
                        Held on <span>{date}</span> at <span>{circuit}, {location}</span>
                    </div>
                    <RaceResults results={results} />
                    <StandingsAfterRace season={season} round={round} />
                </div>
            </>
        )
    }

    return(
        <section className="details has-shadow">
            {renderResults()}
        </section>
    )
}

export default RaceDetails;