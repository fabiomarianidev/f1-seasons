import React from "react";

const RaceItem = ({raceName, circuitName, season, round}) => {
    const link = `/${season}${round}`;

    return (
        <li className="raceItem">
            <a href={link}>
                <div className="raceItem__race">{raceName}</div>
                <div className="raceItem__circuit">{circuitName}</div>
            </a>
        </li>
    )
}

export default RaceItem;