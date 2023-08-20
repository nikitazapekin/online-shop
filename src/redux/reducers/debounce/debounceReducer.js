import { DEBOUNCE_FAILURE, DEBOUNCE_REQUEST, DEBOUNCE_SUCCESS } from "./debounceThunk.js";

const initialState = {
  loading: false,
  post: null,
  error: '',
};

const debounceReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEBOUNCE_REQUEST:
        console.log("request")
      return {
        ...state,
        loading: true,
      };
    case DEBOUNCE_SUCCESS:
        console.log("SUCCESS"+action.payload)
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case DEBOUNCE_FAILURE:
      console.log("BAdd")
      throw new Error("bd")
      return {
        loading: false,
        post: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default debounceReducer;
