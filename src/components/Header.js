import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <h1>Formula One Season Results</h1>
                <p className="header__subtitle">Powered by the <a href="http://ergast.com/mrd/">Ergast Developer API</a></p>
            </div>
        </header>
    )
}

export default Header;