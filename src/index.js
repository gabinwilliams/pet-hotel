import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, take} from 'redux-saga/effects';
import axios from 'axios';


function* rootSaga(){
  yield takeEvery('FETCH_OWNER', fetchOwners);
}
// questions provided on each page
function* fetchOwners(){
  try {
    const owners = yield axios.get('/api/owners')
    console.log ('get owners', owners)
    yield put ({type: 'SET_OWNERS', payload: owners.data})
  }
  catch{
    console.log('get owners error')
  }
}

const sagaMiddleware = createSagaMiddleware();

// stores the values selected on feedback pages and is the obj we send in POST to the server
const owners = (state= [], action) =>{
  switch(action.type){
    case 'SET_OWNERS':
      return action.payload
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    owners,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

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
