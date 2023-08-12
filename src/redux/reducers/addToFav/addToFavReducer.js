/*
  import { FETCH_ADD_TO_FAVOURITE_FAILURE, 
    FETCH_ADD_TO_FAVOURITE_REQUEST, FETCH_ADD_TO_FAVOURITE_SUCCESS } from './addToFavouriteThunk';
  const initialState = {
    loading: false,
    todo: {},
    error: '',
  };
  
  const addToFavReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ADD_TO_FAVOURITE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_ADD_TO_FAVOURITE_SUCCESS:
        return {
          loading: false,
          todo: action.payload,
          error: '',
        };
      case FETCH_ADD_TO_FAVOURITE_FAILURE:
        return {
          loading: false,
          todo: {},
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default addToFavReducer;
  */


  /*import {
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
  } from './actions';
   */
  import { ADD_TO_FAVOURITE_FAILURE, ADD_TO_FAVOURITE_SUCCESS, ADD_TO_FAVOURITE_REQUEST } from "./addToFavouriteThunk.js";
  const initialState = {
    loading: false,
    post: null,
    error: '',
  };
  
  const addToFavouriteReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_FAVOURITE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ADD_TO_FAVOURITE_SUCCESS:
        return {
          loading: false,
          post: action.payload,
          error: '',
        };
      case ADD_TO_FAVOURITE_FAILURE:
        return {
          loading: false,
          post: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default addToFavouriteReducer;
  