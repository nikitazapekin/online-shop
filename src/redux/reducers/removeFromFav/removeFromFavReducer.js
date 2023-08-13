
//import { SHOW_FAVOURITE_FAILURE, SHOW_FAVOURITE_SUCCESS, SHOW_FAVOURITE_REQUEST } from "./showFavouriteThunk.js";
/*import { PAY_FOR_ALL_FAILURE, PAY_FOR_ALL_SUCCESS, PAY_FOR_ALL_REQUEST } from "./payForAllThunk.js";
const initialState = {
  loading: false,
  post: null,
  error: '',
};

const payForAllReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAY_FOR_ALL_REQUEST:
        console.log("request")
      return {
        ...state,
        loading: true,
      };
    case PAY_FOR_ALL_SUCCESS:
        console.log("SUCCESS"+action.payload)
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case PAY_FOR_ALL_FAILURE:
      return {
        loading: false,
        post: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default payForAllReducer;
*/



//import { SHOW_FAVOURITE_FAILURE, SHOW_FAVOURITE_SUCCESS, SHOW_FAVOURITE_REQUEST } from "./showFavouriteThunk.js";
import { REMOVE_FROM_FAV_FAILURE, REMOVE_FROM_FAV_SUCCESS, REMOVE_FROM_FAV_REQUEST } from "./removeFromFavThunk.js";
const initialState = {
  loading: false,
  post: null,
  error: '',
};

const removeFvReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FROM_FAV_REQUEST:
        console.log("request")
      return {
        ...state,
        loading: true,
      };
    case REMOVE_FROM_FAV_SUCCESS:
        console.log("SUCCESS"+action.payload)
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case REMOVE_FROM_FAV_FAILURE:
      return {
        loading: false,
        post: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default removeFvReducer;
