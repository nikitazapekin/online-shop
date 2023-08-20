import { FOUND_PAGE_ITEMS_FAILURE, FOUND_PAGE_ITEMS_SUCCESS, FOUND_PAGE_ITEMS_REQUEST } from "./foundPageItemsThunk.js";
const initialState = {
  loading: false,
  post: null,
  error: '',
};

const foundPageItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOUND_PAGE_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FOUND_PAGE_ITEMS_SUCCESS:

const filteredItems= (action.payload)
      return {
        loading: false,
        post: filteredItems,
        error: '',
      };
    case FOUND_PAGE_ITEMS_FAILURE:
      return {
        loading: false,
        post: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default foundPageItemsReducer;