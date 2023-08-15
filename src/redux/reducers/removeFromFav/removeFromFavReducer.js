
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
