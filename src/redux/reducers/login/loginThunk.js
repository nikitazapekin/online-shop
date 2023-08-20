
import axios from 'axios';
export const LOGIN_REQUEST = 'REGISTER_REQUEST';
export const LOGIN_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_FAILURE = 'REGISTER_FAILURE';
export const CLEAR_STORE = 'REGCLEAR_STORE';
export const loginRequest = () => {
    console.log("tov reqquest")
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (post) => {
  return {
    type: LOGIN_SUCCESS,
    payload: post,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};
export const clearStore=()=> {
    return {
        type: CLEAR_STORE
    }
}
export const loginPost = (posttData) => {
  const data=posttData
    return (dispatch) => {
      dispatch(loginRequest());
      axios
        .post('http://localhost:5000/login', (data)) 
        .then((response) => {
          const createdPost = response.data;
          dispatch(loginSuccess(createdPost));
        })
        .catch((error) => {
          dispatch(loginFailure(error.message));
        });
    };
  };
  