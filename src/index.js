import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import reducer from "./redux/reducer.js";
import { Provider } from "react-redux";

import App from "./App";
const store = createStore(reducer);

const rootEl = document.getElementById("root");
ReactDOM.createRoot(rootEl).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
