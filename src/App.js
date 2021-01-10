import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import SeasonDetails from "./components/SeasonDetails";
import RaceDetails from "./components/RaceDetails";

import "normalize.css";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main>
          <Sidebar />
            <Route exact path="/" component={SeasonDetails} />
            <Route path="/:race" component={RaceDetails} />
        </Main>
      </Router>
    </div>
  );
}

export default App;
