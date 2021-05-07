import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, take, call} from 'redux-saga/effects';
import axios from 'axios';
import {useDispatch} from 'react-redux';


function* rootSaga(){
  yield takeEvery('FETCH_OWNER', fetchOwners);
  yield takeEvery('FETCH_PETS', fetchPets);
  yield takeEvery('ADD_PETS', addPet);
  yield takeEvery('ADD_OWNER', addOwner);
  yield takeEvery('DELETE_OWNER', deleteOwner);
  yield takeEvery('DELETE_PET', deletePet);
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
    yield put({type:'FETCH_PETS'})
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

function* deleteOwner(action){
  console.log( 'in deleteOwner generator', action.payload)

  try {

//     const uri = `/api/owner/${action.payload.ownerID}`;
//     const deleteThisOwner = yield call(axios.delete, uri);
//     yield put({ type: 'FETCH_OWNER'});
//     alert('deletOwner generator successfully!');
    // const deletedOwner = yield axios.delete('/api/owner/', {data:action.payload.ownerID})
    // console.log('in delete')
    const deletedOwner = yield axios.delete('/api/owner/' + action.payload.ownerID)
    console.log('in delete')
    yield put ({type: 'FETCH_OWNERS'})

  }
  catch(error){
    console.log('error in deleteOwner generator:', error )
  }
}

function* deletePet(action) {
  console.log('in deletePet generator', action.payload);

  try {
    const deletePet = yield axios.delete('/api/pets/' + action.payload.id)

    yield put({type:'FETCH_PETS'})
  }catch(error) {
    console.log('error in deletePet saga:', error);
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
