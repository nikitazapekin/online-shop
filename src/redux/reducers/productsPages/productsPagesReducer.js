import { PRODUCTS_PAGES_FAILURE, PRODUCTS_PAGES_SUCCESS, PRODUCTS_PAGES_REQUEST } from "./productsPagesThunk.js";
const initialState = {
  loading: false,
  post: null,
  error: '',
};

const productsPagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_PAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCTS_PAGES_SUCCESS:

const filteredItems= (action.payload.data)
      return {
        loading: false,
        post: filteredItems,
        error: '',
      };
    case PRODUCTS_PAGES_FAILURE:
      return {
        loading: false,
        post: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsPagesReducer;