//
//Index.js kick starts the application
import React from "react";
import ReactDOM from "react-dom";
// importing every single page to be rendered in the website
import App from "./App";


//
//This are the components being rendered to the dom at the root
//area in our html tag which happens to be after the body.
ReactDOM.render(
  // This a tool for highlighting potential problems in an application
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //
  //we are getting the id of the div which is inside the html body.
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
