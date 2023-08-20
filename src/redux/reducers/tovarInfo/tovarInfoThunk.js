
import axios from 'axios';

export const TOVAR_REQUEST = 'TOVAR_REQUEST';
export const TOVAR_SUCCESS = 'TOVAR_SUCCESS';
export const TOVAR_FAILURE = 'TOVAR_FAILURE';

export const tovarRequest = () => {
    console.log("tov reqquest")
  return {
    type: TOVAR_REQUEST,
  };
};

export const tovarSuccess = (post) => {
  return {
    type: TOVAR_SUCCESS,
    payload: post,
  };
};

export const tovarFailure = (error) => {
  return {
    type: TOVAR_FAILURE,
    payload: error,
  };
};
export const postFavourite = (postData) => {
    const data = { id: postData }; 
    return (dispatch) => {
      dispatch(tovarRequest());
      axios
        .post('http://localhost:5000/item', data) 
        .then((response) => {
          const createdPost = response.data;
          dispatch(tovarSuccess(createdPost));
        })
        .catch((error) => {
          dispatch(tovarFailure(error.message));
        });
    };
  };
  