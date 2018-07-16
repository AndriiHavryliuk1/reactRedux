/*
import React from "react";
import {render} from "react-dom";

import { User } from "./components/User";
import { Main } from "./components/Main";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Sonik"
        }
    }

    changeUsername(newName) {
        this.setState({
            username: newName
        })
    }

    render() {
        return (
            <div className="container">
                <h1>It works!!!</h1>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));

*/

import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

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

const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(logger));

store.subscribe(() => {
    console.log("Store updated", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "SUBTRACT",
    payload: 50
});

store.dispatch({
    type: "ADD",
    payload: 10
});

store.dispatch({
    type: "SET_NAME",
    payload: "newName"
});