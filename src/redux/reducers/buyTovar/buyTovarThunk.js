
import axios from 'axios';

export const BUY_TOVAR_REQUEST = 'TOVAR_REQUEST';
export const BUY_TOVAR_SUCCESS = 'TOVAR_SUCCESS';
export const BUY_TOVAR_FAILURE = 'TOVAR_FAILURE';

export const buyTovarRequest = () => {
    console.log("tov reqquest")
  return {
    type: BUY_TOVAR_REQUEST,
  };
};

export const buyTovarSuccess = (post) => {
  return {
    type: BUY_TOVAR_SUCCESS,
    payload: post,
  };
};

export const buyTovarFailure = (error) => {
  return {
    type: BUY_TOVAR_FAILURE,
    payload: error,
  };
};
export const buyTovarPost = (postData) => {
    const data = { userId: postData.userId, tovId: postData.id, name: postData.username  }; 
    return (dispatch) => {
      dispatch(buyTovarRequest());
      axios
        .post('http://localhost:5000/buy', (data)) 
        .then((response) => {
          const createdPost = response.data;
          dispatch(buyTovarSuccess(createdPost));
        })
        .catch((error) => {
          dispatch(buyTovarFailure(error.message));
        });
    };
  };
  