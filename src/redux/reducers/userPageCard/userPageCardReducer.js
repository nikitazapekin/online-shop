
import { USER_PAGE_FAILURE, USER_PAGE_REQUEST, USER_PAGE_SUCCESS } from "./userPageCardThunk.js";
const initialState = {
  loading: false,
  post: null,
  error: '',
};

const userPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PAGE_REQUEST:
        console.log("request")
      return {
        ...state,
        loading: true,
      };
    case USER_PAGE_SUCCESS:
        console.log("SUCCESS"+action.payload)
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case USER_PAGE_FAILURE:
      return {
        loading: false,
        post: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userPageReducer;
