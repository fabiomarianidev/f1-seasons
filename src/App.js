import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

import "normalize.css";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Sidebar />
      </Main>
    </div>
  );
}

export default App;
