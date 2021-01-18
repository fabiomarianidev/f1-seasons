import React from "react";

const RaceResults = ({results}) => {

    const evaluateTime = (driver) => {
        if (driver.status === "Finished") {
            return driver.Time.time;
        } else {
            return driver.status;
        }
    }

    return (
        <section className="tableComponent">
            <header className="tableComponent__header">
                <p>Final Results</p>
            </header>
            <table className="tableRaceResults">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Driver</th>
                        <th>Constructor</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(item => {
                        return (
                            <tr key={item.position}>
                            <td>{item.position}</td>
                            <td>{item.Driver.givenName} {item.Driver.familyName}</td>
                            <td>{item.Constructor.name}</td>
                            <td>{evaluateTime(item)}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default RaceResults;