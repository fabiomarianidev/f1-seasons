import React, { useState, useEffect } from "react";

const StandingsAfterRace = ({ season, round }) => {
    const [ standings, setStandings ] = useState([]);
    const [ isLoading, setIsLoading] = useState(true);
    const [ isError, setIsError ] = useState(false);

    useEffect( () => {
        const link = `http://ergast.com/api/f1/${season}/${round}/driverStandings.json`;

        const fetchStandings = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(link);
                const responseJson = await response.json();
                const data = await responseJson.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                setStandings(data);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
                setIsLoading(false)
            }
        }
        fetchStandings();

    }, [season, round] )

    const renderStandings = () => {
        if (isLoading) return <p>Loading..</p>
        if (isError) return <p>There was an error</p>
        return(
            <table className="drivers">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Driver</th>
                        <th>Constructor</th>
                        <th>Points</th>
                        <th>Wins</th>
                    </tr>
                </thead>
                <tbody>
                    {standings.map(item => (
                        <tr key={item.position}>
                            <td>{item.position}</td>
                            <td>{item.Driver.givenName} {item.Driver.familyName}</td>
                            <td>{item.Constructors[0].name}</td>
                            <td>{item.points}</td>
                            <td>{item.wins}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    return (
        <section className="tableComponent">
            <header className="tableComponent__header">
                <p>Standings after the race</p>
            </header>
            {renderStandings()}
        </section>
    )
}

export default StandingsAfterRace;