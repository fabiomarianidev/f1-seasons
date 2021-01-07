import React, {useEffect, useState} from "react";

const SeasonModal = ({handleClose}) => {
    const [ seasons, setSeasons ] = useState();

    useEffect( ( )=> {
        const fetchSeasons = async () => {
            try {
                const response = await fetch("http://ergast.com/api/f1/seasons.json?limit=100");
                const responseJson = await response.json();
                const data = await responseJson.MRData.SeasonTable.Seasons;
                setSeasons(data);
            } catch (error) {

            }
        }
        fetchSeasons();
    }, [])

    const handleSeasonSelect = (season) => {
        console.log(season);
    }

    const displaySeasons = () => {
        if (seasons) {
            return (
                <div>
                    {seasons.map( (item, index) => (
                        <button key={index} onClick={() => handleSeasonSelect(item.season)}>{item.season}</button>
                    ) )}
                </div>
            )
        }
    }

    return(
        <div className="modal">
            <p>Modal</p>
            {displaySeasons()}
            <button onClick={handleClose}>Close</button>
        </div>
    )
}

export default SeasonModal;