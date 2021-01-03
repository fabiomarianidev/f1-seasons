import React from "react";
import { useSelector } from "react-redux";
import { selectSeason } from "../ducks/seasonSlice";

const SeasonDetails = () => {
    const { season, drivers, constructors, isLoading, isError } = useSelector(selectSeason);
    const winningDriver = drivers[0].Driver.givenName + " " + drivers[0].Driver.familyName;
    const winningConstructor = constructors[0].Constructor.name;

    return(
        <section className="seasonDetails has-shadow">
            <header className="seasonDetails__header">
                <p>Results for the {season} season</p>
            </header>
            <div className="seasonDetails__mainContent">
                <div className="seasonDetails__winners">
                    <div className="seasonDetails__card">
                        <div className="seasonDetails__title">Winning driver</div>
                        <div className="seasonDetails__name">{winningDriver}</div>
                    </div>
                    <div className="seasonDetails__card">
                        <div className="seasonDetails__title">Winning team</div>
                        <div className="seasonDetails__name">{winningConstructor}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeasonDetails;