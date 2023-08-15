
import { REGISTER_FAILURE, REGISTER_SUCCESS, REGISTER_REQUEST } from "./registerThunk.js";
const initialState = {
  loading: false,
  post: null,
  error: '',
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
        console.log("request")
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
        console.log("SUCCESS"+action.payload)
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case REGISTER_FAILURE:
      return {
        loading: false,
        post: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer;