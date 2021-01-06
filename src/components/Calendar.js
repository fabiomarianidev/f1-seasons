import React from "react";

const Calendar = ({races}) => {
    return (
        <section className="tableComponent">
            <header className="tableComponent__header">
                <p>Calendar</p>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Round</th>
                        <th>Race</th>
                        <th>Circuit</th>
                        <th>Location</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {races.map(item => (
                        <tr>
                            <td>{item.round}</td>
                            <td>{item.raceName}</td>
                            <td>{item.Circuit.circuitName}</td>
                            <td>{item.Circuit.Location.locality}, {item.Circuit.Location.country}</td>
                            <td>{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Calendar;