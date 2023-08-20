import { PAY_FOR_ALL_FAILURE, PAY_FOR_ALL_SUCCESS, PAY_FOR_ALL_REQUEST } from "./payForAllThunk.js";
const initialState = {
  loading: false,
  post: null,
  error: '',
};

const payForAllReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAY_FOR_ALL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PAY_FOR_ALL_SUCCESS:
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case PAY_FOR_ALL_FAILURE:
      return {
        loading: false,
        post: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default payForAllReducer;