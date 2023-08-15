
import axios from 'axios';
export const COMMENTS_REQUEST = 'TOVAR_REQUEST';
export const COMMENTS_SUCCESS = 'TOVAR_SUCCESS';
export const COMMENTS_FAILURE = 'TOVAR_FAILURE';
export const RATE = 'RATE';
export const commentsRequest = () => {
  return {
    type: COMMENTS_REQUEST,
  };
};

export const commentsSuccess = (post) => {
  return {
    type: COMMENTS_SUCCESS,
    payload: post,
  };
};

export const commentsFailure = (error) => {
  return {
    type: COMMENTS_FAILURE,
    payload: error,
  };
};
export const commentsRate = (payload) => {
    return {
      type: RATE,
      payload: payload,
    };
  };
export const commentsPost = (postData) => {
    const data = postData; 
    return (dispatch) => {
      dispatch(commentsRequest());
      axios
        .post('http://localhost:5000/addComment', (data)) 
        .then((response) => {
          const createdPost = response.data;
          dispatch(commentsSuccess(createdPost));
        })
        .catch((error) => {
          dispatch(commentsFailure(error.message));
        });
    };
  };
  