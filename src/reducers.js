import axios from "axios";
import thunk from "redux-thunk";
import { combineReducers } from 'redux';
//import { createStore } from 'redux';
import { createStore, applyMiddleware } from 'redux';
const initialState = {
    username: null, 
    email: null,
    password: null,
  };
  
const reducer=(state=initialState, action)=>{
    if(action.type=="USER"){

        state=action.payload
        console.log(state)
    }
return state
}
export default reducer