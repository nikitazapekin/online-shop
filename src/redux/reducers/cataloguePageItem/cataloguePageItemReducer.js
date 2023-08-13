
import { CATALOGUE_PAGE_ITEM_FAILURE, CATALOGUE_PAGE_ITEM_REQUEST, CATALOGUE_PAGE_ITEM_SUCCESS } from "./cataloguePageItemThunk.js";
const initialState = {
  loading: false,
  post: null,
  error: '',
};

const cataloguePageItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATALOGUE_PAGE_ITEM_REQUEST:
        console.log("request")
      return {
        ...state,
        loading: true,
      };
    case CATALOGUE_PAGE_ITEM_SUCCESS:
        console.log("SUCCESS"+action.payload)
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case CATALOGUE_PAGE_ITEM_FAILURE:
      return {
        loading: false,
        post: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cataloguePageItemReducer;
