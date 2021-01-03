import React from "react";

const RaceCard = ({raceName, circuit, date}) => {
    return (
        <div>
            <strong>{raceName}</strong>
            <p>Held at {circuit} on {date}</p>
        </div>
    )
}

export default RaceCard;