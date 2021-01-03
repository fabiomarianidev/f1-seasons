import React from "react";

const RaceItem = ({raceName, circuitName}) => {
    return (
        <li className="raceItem">
            <a href="#">
                <div className="raceItem__race">{raceName}</div>
                <div className="raceItem__circuit">{circuitName}</div>
            </a>
        </li>
    )
}

export default RaceItem;