
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST, CLEAR_STORE } from "./loginThunk.js";
const initialState = {
  loading: false,
  post: null,
  error: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
        console.log("request")
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
        console.log("SUCCESS"+action.payload)
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
      //  console.log(state)
    default:
      return state;
  }
};

export default loginReducer;