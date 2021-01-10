import React from "react";
import { Link } from "react-router-dom";

const RaceItem = ({raceName, circuitName, season, round}) => {
    const link = `/${season}${round}`;

    return (
        <li className="raceItem">
            <Link to={link}>
                <div className="raceItem__race">{raceName}</div>
                <div className="raceItem__circuit">{circuitName}</div>
            </Link>
        </li>
    )
}

export default RaceItem;