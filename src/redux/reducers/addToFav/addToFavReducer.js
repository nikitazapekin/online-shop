
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
  