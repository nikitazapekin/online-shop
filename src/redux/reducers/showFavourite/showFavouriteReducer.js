
import { SHOW_FAVOURITE_FAILURE, SHOW_FAVOURITE_SUCCESS, SHOW_FAVOURITE_REQUEST } from "./showFavouriteThunk.js";
const initialState = {
  loading: false,
  post: null,
  error: '',
};

const showFvReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FAVOURITE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SHOW_FAVOURITE_SUCCESS:
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case SHOW_FAVOURITE_FAILURE:
      return {
        loading: false,
        post: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default showFvReducer;
