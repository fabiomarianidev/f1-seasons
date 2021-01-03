import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import SeasonDetails from "./components/SeasonDetails";

import "normalize.css";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Sidebar />
        <SeasonDetails />
      </Main>
    </div>
  );
}

export default App;
