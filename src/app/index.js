
import React from "react";
import {render} from "react-dom";
import App from "./components/App";


import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";

const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state =  Object.assign({}, state, {
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            });
            break;
        case "SUBTRACT":
            state =  Object.assign({}, state, {
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            });
            break;
    }

    return state;
}

const userReducer = (state = {
    name: "Sonik",
    age: 21
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = Object.assign({}, state, {
                name: action.payload
            });
            break;
        case "SET_AGE":
            state = Object.assign({}, state, {
                age: action.payload
            });
            break;
    }

    return state;
}

const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    next(action);
}

const store = createStore(combineReducers({ math: mathReducer, user: userReducer}), {}, applyMiddleware(logger));

store.subscribe(() => {
    console.log("Store updated", store.getState());
});


render(<Provider store={store}><App /></Provider>, window.document.getElementById('app'));