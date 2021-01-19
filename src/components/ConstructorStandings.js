import React from "react";

const ConstructorStandings = ({constructors}) => (
    <section className="tableComponent">
        <header className="tableComponent__header">
            <p>Constructors Standings</p>
        </header>
        <table className="constructors">
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Constructor</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {constructors.map(item => (
                    <tr key={item.position}>
                        <td>{item.position}</td>
                        <td>{item.Constructor.name}</td>
                        <td>{item.points}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
)

export default ConstructorStandings;