
import { TOVAR_FAILURE, TOVAR_SUCCESS, TOVAR_REQUEST } from "./tovarInfoThunk.js";
const initialState = {
  loading: false,
  post: null,
  error: '',
};

const tovarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOVAR_REQUEST:
        console.log("request")
      return {
        ...state,
        loading: true,
      };
    case TOVAR_SUCCESS:
        console.log("SUCCESS"+action.payload)
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case TOVAR_FAILURE:
      return {
        loading: false,
        post: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default tovarReducer;
