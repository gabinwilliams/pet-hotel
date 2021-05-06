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
  yield takeEvery('FETCH_PETS', fetchPets);
  yield takeEvery('ADD_PETS', addPet);
  yield takeEvery('ADD_OWNER', addOwner);
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

function* fetchPets(){
  try {
    const pets = yield axios.get('/api/pets')
    console.log ('get pets', pets.data)
    yield put ({type: 'SET_PETS', payload: pets.data})
  }
  catch{
    console.log('get pets error')
  }
}

function* addPet(action){
  try {
    const newPet= yield axios.post('/api/pets', action.payload)
    console.log('in POST')
  }
  catch{
    console.log('error in post')
  }
}

function* addOwner(action){
  console.log('in add owner', action.payload)

  try {
    const newOwner= yield axios.post('/api/owner', action.payload)
  }
  catch(error){
    console.log('add to favorite error', error)
  }
  
  // axios.post('/api/owner', ownerToPost )
        //     .then( ( response )=>{
        //         alert('Success! New Owner Added!');
        //     }).catch( error => {
        //         console.log( 'error in addNewOwner POST', error);
        //     })
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

const pets = (state= [], action)=>{
  switch(action.type){
    case 'SET_PETS':
      return action.payload
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    owners,
    pets,
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
