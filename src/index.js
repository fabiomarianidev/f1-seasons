import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import "typeface-roboto";

import App from './App';
import reducer from "./ducks";

const store = configureStore({reducer: reducer})

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);