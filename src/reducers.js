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



const initialStateOfAuth = {
    isRegistered: false
  };
  
const authReducer=(state=initialStateOfAuth, action)=>{
    if(action.type=="CHECK_AUTH"){

       state=action.payload
       // console.log(JSON.stringify(state) +":"+action.payload )
    }
return state
}
export default authReducer