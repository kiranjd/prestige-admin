import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import App from "./app";

import "./index.css";

import "bootstrap/dist/css/bootstrap.css";
import LoginPage from "./containers/LoginPage";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <LoginPage />
  </BrowserRouter>,
  document.getElementById("root")
);
