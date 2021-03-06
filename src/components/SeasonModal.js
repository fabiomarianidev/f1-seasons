import React, {useEffect, useState, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSeason, selectSeason } from "../ducks/seasonSlice";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const SeasonModal = ({handleClose}) => {

    const node = useRef();

    const history = useHistory();
    const dispatch = useDispatch();
    
    const {season} = useSelector(selectSeason);

    const [ seasons, setSeasons ] = useState();
    const [ page, setPage ] = useState(0);

    // mount and unmount
    useEffect( () => {
        document.addEventListener("mousedown", handleClickOutside);
        return( ()=> {
            document.removeEventListener("mousedown", handleClickOutside);
        }) 
    },[])

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

        const page = Math.trunc((season - 1950) / 12);
        setPage(page);
    }, [season])

    const handleSeasonSelect = (selectedSeason) => {
        dispatch(loadSeason(selectedSeason));
        history.push("/");
        handleClose();
    }

    const handlePrevPage = () => {
        if (page > 0)
            setPage(page - 1);
    }

    const handleNextPage = () => {
        const lastPage = seasons.length / 12;
        if (page < lastPage - 1)
            setPage(page + 1);
    }

    const handleClickOutside = (event) => {
        if(!node.current.contains(event.target)) {
            handleClose();
        } 
    }

    const displaySeasons = () => {
        if (seasons) {
            return (
                <div className="modal__selector">
                    {seasons.slice(page*12,(page + 1)*12).map( (item, index) => (
                        <button 
                            key={index} 
                            onClick={() => handleSeasonSelect(item.season)}
                            className={item.season === season ? "selected" : ""}
                        >
                            {item.season}
                        </button>
                    ))}
                </div>
            )
        }
    }

    return(
        <div className="modal" ref={node}>
            <div className="modal__header">
                <button onClick={handlePrevPage}><FontAwesomeIcon icon={faChevronLeft} /></button>
                <p className="modal__title">Select a season</p>
                <button onClick={handleNextPage}><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            {displaySeasons()}
            <button className="modal__button" onClick={handleClose}>Close</button>
        </div>
    )
}

export default SeasonModal;