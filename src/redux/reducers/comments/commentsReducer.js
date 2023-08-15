
import { COMMENTS_FAILURE, COMMENTS_SUCCESS, COMMENTS_REQUEST, RATE } from "./commentsReducerThunk.js";
function checkRate(value){
    if(value==0){
        return 5
    }
    if(value==2){
        return 4
    }
    if(value==4){
        return 3
    }
    if(value==6){
        return 2
    }
    if(value==8){
        return 1
    }
    
    return 0
    }
const initialState = {
  loading: false,
  post: null,
  error: '',
  rate: 0,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMENTS_SUCCESS:
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case COMMENTS_FAILURE:
      return {
        loading: false,
        post: null,
        error: action.payload,
      };

      case RATE:
        return {
          loading: false,
          post: null,
          rate: checkRate(action.payload)
        };
    default:
      return state;
  }
};

export default commentsReducer;
