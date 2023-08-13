import { SLIDER_FAILURE, SLIDER_SUCCESS, SLIDER_REQUEST } from "./sliderThunk.js";
const initialState = {
  loading: false,
  post: null,
  error: '',
};

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SLIDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SLIDER_SUCCESS:
const filteredItems= (action.payload.data).filter(item=> {
  return item.neww !== false;
})
      return {
        loading: false,
        post: filteredItems,
        error: '',
      };
    case SLIDER_FAILURE:
      return {
        loading: false,
        post: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default sliderReducer;