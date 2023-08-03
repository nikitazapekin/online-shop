
//import reducer  from './reducers.js';

//import reducer from './reducers';
import axios from "axios";
import thunk from "redux-thunk";
import { combineReducers } from 'redux';
//import { createStore } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from "./reducers.js";
import authReducer from "./reducers.js";
export const rootReducer = combineReducers({

// reducer: reducer,
//authReducer: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));