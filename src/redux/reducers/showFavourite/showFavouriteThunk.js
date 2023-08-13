
import axios from 'axios';

export const SHOW_FAVOURITE_REQUEST = 'SHOW_FAVOURITE_REQUEST';
export const SHOW_FAVOURITE_SUCCESS = 'SHOW_FAVOURITE_SUCCESS';
export const SHOW_FAVOURITE_FAILURE = 'SHOW_FAVOURITE_FAILURE';

export const showFavouriteRequest = () => {
    console.log("tov reqquest")
  return {
    type: SHOW_FAVOURITE_REQUEST,
  };
};

export const showFavouriteSuccess = (post) => {
  return {
    type: SHOW_FAVOURITE_SUCCESS,
    payload: post,
  };
};

export const showFavouriteFailure = (error) => {
  return {
    type: SHOW_FAVOURITE_FAILURE,
    payload: error,
  };
};
export const showFavouritePost = (postData) => {
  console.log(postData)
  const data=postData;
  
    return (dispatch) => {
      dispatch(showFavouriteRequest());
      axios
        .post('http://localhost:5000/favv', (data)) 
        .then((response) => {
          const createdPost = response.data;
          console.log(response.data);
          dispatch(showFavouriteSuccess(createdPost));
        })
        .catch((error) => {
          dispatch(showFavouriteFailure(error.message));
        });
    };
  };
  