import axios from "axios";
import thunk from "redux-thunk";
import { combineReducers } from 'redux';
//import { createStore } from 'redux';
import { createStore, applyMiddleware } from 'redux';



const defaultState ={
  //  customers: []
  resp: []
}
const REGISTER="REGISTER"

export const registerReducer=(state=defaultState, action )=>{
    switch(action.type){
      case REGISTER:
        console.log(action.payload)
        return state 
      //  return {...state, customers: [...state.customers, ...action.payload]}
        default:
          return state
    }
    }

    export const registerAction=(payload)=> ({
        type: REGISTER,  payload
            })
/*
const defaultState ={
    customers: []
}
const ADD_CUSTOMER="ADD_CUSTOMER"
const ADD_MANY_CUSTOMERS="ADD_MANY_CUSTOMERS"
const REMOVE_CUSTOMERS="REMOVE_CUSTOMERS"
export const customerReducer=(state=defaultState, action )=>{
    switch(action.type){
      case ADD_MANY_CUSTOMERS: 
        return {...state, customers: [...state.customers, ...action.payload]}
      case ADD_CUSTOMER: 
      return {...state,customers: [...state.customers, action.payload]}
      case REMOVE_CUSTOMERS:
        return {...state, customers: state.customers.filter(customer=> customer.id!==action.payload)}
        default:
          return state
    }
    }
    export const addCustomerAction=(payload)=> ({
type: ADD_CUSTOMER,  payload
    })
    export const removeCustomerAction=(payload)=> ({
      type: REMOVE_CUSTOMERS,  payload
          })

          export const addManyCustomersAction=(payload)=> ({
            type: ADD_MANY_CUSTOMERS,  payload
                })

*/