
import axios from 'axios';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = (post) => {
  return {
    type: REGISTER_SUCCESS,
    payload: post,
  };
};

export const registerFailure = (error) => {
  return {
    type: REGISTER_FAILURE,
    payload: error,
  };
};
export const registerPost = (posttData) => {
  const data=posttData
    return (dispatch) => {
      dispatch(registerRequest());
      axios
        .post('http://localhost:5000/register', (data)) 
        .then((response) => {
          const createdPost = response.data;
          dispatch(registerSuccess(createdPost));
        })
        .catch((error) => {
          dispatch(registerFailure(error.message));
        });
    };
  };
  