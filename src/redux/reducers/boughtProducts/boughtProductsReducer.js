import { BUY_PRODUCTS_FAILURE, BUY_PRODUCTS_REQUEST, BUY_PRODUCTS_SUCCESS } from "./boughtProductsThunk.js";

const initialState = {
  loading: false,
  post: null,
  error: '',
};

const buyProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PRODUCTS_REQUEST:
        console.log("request")
      return {
        ...state,
        loading: true,
      };
    case BUY_PRODUCTS_SUCCESS:
        console.log("SUCCESS"+action.payload)
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case BUY_PRODUCTS_FAILURE:
      return {
        loading: false,
        post: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default buyProductsReducer;
