import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom"

console.log("test");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#root")
);
