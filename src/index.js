import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import App from "./App";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
