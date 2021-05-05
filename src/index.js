import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { applyMiddleware } from "redux";

// questions provided on each page


// stores the values selected on feedback pages and is the obj we send in POST to the server


const store = createStore(
  combineReducers({
  
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  // wrap app in provider to allow for redux logger in console log
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();