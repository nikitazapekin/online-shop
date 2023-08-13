


import axios from 'axios';

export const ADD_TO_FAVOURITE_REQUEST = 'ADD_TO_FAVOURITE_REQUEST';
export const ADD_TO_FAVOURITE_SUCCESS = 'ADD_TO_FAVOURITE_SUCCESS';
export const ADD_TO_FAVOURITE_FAILURE = 'ADD_TO_FAVOURITE_FAILURE';

export const addToFavouriteRequest = () => {
  return {
    type: ADD_TO_FAVOURITE_REQUEST,
  };
};

export const addToFavouriteSuccess = (post) => {
  return {
    type: ADD_TO_FAVOURITE_SUCCESS,
    payload: post,
  };
};

export const addToFavouriteFailure = (error) => {
  return {
    type: ADD_TO_FAVOURITE_FAILURE,
    payload: error,
  };
};

export const addToFavouritePost = (postData) => {
  const data=postData
  console.log(data)
  
  return (dispatch) => {
    dispatch(addToFavouriteRequest());
    axios
      .post('http://localhost:5000/addToFav', postData)
      .then((response) => {
        const createdPost = response.data;
        dispatch(addToFavouriteSuccess(createdPost));
      })
      .catch((error) => {
        dispatch(addToFavouriteFailure(error.message));
      });
  };
};
