import React from "react";

import { formatDate } from "../functions/dateFunctions";

const Calendar = ({races}) => {
    return (
        <section className="tableComponent">
            <header className="tableComponent__header">
                <p>Calendar</p>
            </header>
            <table className="tableCalendar">
                <thead>
                    <tr>
                        <th>Round</th>
                        <th>Race</th>
                        <th>Circuit</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {races.map(item => (
                        <tr key={item.round}>
                            <td>{item.round}</td>
                            <td>{item.raceName}</td>
                            <td>{item.Circuit.circuitName}<br/>{item.Circuit.Location.locality}, {item.Circuit.Location.country}</td>
                            <td>{formatDate(item.date)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Calendar;