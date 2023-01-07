import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import reducer from "./redux/reducer.js";
import {Provider} from "react-redux"

import App from "./App";
const store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store = {store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
