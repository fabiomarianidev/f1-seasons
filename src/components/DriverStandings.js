import React from "react";

const DriverStandings = ({drivers}) => {
    return(
        <section className="standings">
            <header className="standings__header">
                <p>Drivers Standings</p>
            </header>
            <table>
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
                    {drivers.map( (item) => (
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
        </section>
    )
}

export default DriverStandings;