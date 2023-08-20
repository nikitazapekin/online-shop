
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST, CLEAR_STORE } from "./loginThunk.js";
const initialState = {
  loading: false,
  post: null,
  error: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        post: null,
        error: action.payload,
      };
      case CLEAR_STORE:
        return {
            loading: false,
        post: null,
        error: action.payload,  
        }
    default:
      return state;
  }
};

export default loginReducer;