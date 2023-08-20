
import axios from 'axios';
export const REMOVE_FROM_FAV_REQUEST = 'REMOVE_FROM_FAV_REQUEST';
export const REMOVE_FROM_FAV_SUCCESS = 'REMOVE_FROM_FAV_SUCCESS';
export const REMOVE_FROM_FAV_FAILURE = 'REMOVE_FROM_FAV_FAILURE';
export const removeFromFavRequest = () => {
  return {
    type: REMOVE_FROM_FAV_REQUEST,
  };
};

export const removeFromFavSuccess = (post) => {
  return {
    type: REMOVE_FROM_FAV_SUCCESS,
    payload: post,
  };
};

export const removeFromFavFailure = (error) => {
  return {
    type: REMOVE_FROM_FAV_FAILURE,
    payload: error,
  };
};
export const removeFromFavPost = (postData) => {
  const data=postData;
  
    return (dispatch) => {
      dispatch(removeFromFavRequest());
      axios
        .post('http://localhost:5000/removeFavv', (data)) 
        .then((response) => {
          const createdPost = response.data;
          dispatch(removeFromFavSuccess(createdPost));
        })
        .catch((error) => {
          dispatch(removeFromFavFailure(error.message));
        });
    };
  };
  