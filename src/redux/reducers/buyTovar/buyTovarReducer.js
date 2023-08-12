
import { BUY_TOVAR_FAILURE, BUY_TOVAR_SUCCESS, BUY_TOVAR_REQUEST } from "./buyTovarThunk.js";
const initialState = {
  loading: false,
  post: null,
  error: '',
};

const buyTovarReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_TOVAR_REQUEST:
        console.log("request")
      return {
        ...state,
        loading: true,
      };
    case BUY_TOVAR_SUCCESS:
        console.log("SUCCESS"+action.payload)
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case BUY_TOVAR_FAILURE:
      return {
        loading: false,
        post: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default buyTovarReducer;
