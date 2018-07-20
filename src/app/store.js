import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./reducers/userReducer";
import mathReducer from "./reducers/mathReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

export default createStore(combineReducers({ math: mathReducer, user: userReducer}), {}, applyMiddleware(logger, thunk, promise()));