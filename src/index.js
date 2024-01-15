import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./Css.css";
import "./Global.css";
import { BrowserRouter } from "react-router-dom";
import MyApp from "./MyApp";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserRouter>
    {" "}
    {/* <React.StrictMode> */}
   {/*  <MyApp></MyApp> */}
    <App></App>
    {/* </React.StrictMode> */}
    </BrowserRouter>
  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
