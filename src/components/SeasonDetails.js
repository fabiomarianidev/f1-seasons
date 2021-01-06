import React from "react";
import { useSelector } from "react-redux";

import { selectSeason } from "../ducks/seasonSlice";

import DriverStandings from "./DriverStandings";
import ConstructorStandings from "./ConstructorStandings";
import Calendar from "./Calendar";

const SeasonDetails = () => {
    const { season, races, drivers, constructors, isLoading, isError } = useSelector(selectSeason);


    const displayDetails = () => {
        if (isLoading) {
            return <p>Please wait..</p>
        }

        if (isError) {
            return <p>There was an error</p>
        }

        if ( season === 0) {
            return <p>No season selected</p>
        }

        const winningDriver = drivers[0].Driver.givenName + " " + drivers[0].Driver.familyName;
        const winningConstructor = constructors[0].Constructor.name;

        return(
            <>
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
                    <DriverStandings drivers={drivers} />
                    <ConstructorStandings constructors={constructors} />
                    <Calendar races={races} />
                </div>
            </>
        )
    }

    return(
        <section className="seasonDetails has-shadow">
            {displayDetails()}
        </section>
    )
}

export default SeasonDetails;