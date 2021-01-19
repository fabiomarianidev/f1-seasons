import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import MainSection from "./components/MainSection";
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
        <MainSection>
          <Sidebar />
            <Route exact path="/" component={SeasonDetails} />
            <Route path="/:race" component={RaceDetails} />
        </MainSection>
      </Router>
    </div>
  );
}

export default App;
