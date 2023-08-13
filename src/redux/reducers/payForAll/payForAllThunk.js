
import axios from 'axios';
export const PAY_FOR_ALL_REQUEST = 'PAY_FOR_ALL_REQUEST';
export const PAY_FOR_ALL_SUCCESS = 'PAY_FOR_ALL_SUCCESS';
export const PAY_FOR_ALL_FAILURE = 'PAY_FOR_ALL_FAILURE';
export const payForAllRequest = () => {
    console.log("tov reqquest")
  return {
    type: PAY_FOR_ALL_REQUEST,
  };
};

export const payForAllSuccess = (post) => {
  return {
    type: PAY_FOR_ALL_SUCCESS,
    payload: post,
  };
};

export const payForAllFailure = (error) => {
  return {
    type: PAY_FOR_ALL_FAILURE,
    payload: error,
  };
};
export const payForAllPost = (postData) => {
  console.log(postData)
  const data=postData;
  
    return (dispatch) => {
      dispatch(payForAllRequest());
      axios
        .post('http://localhost:5000/removeAllFavv', (data)) 
        .then((response) => {
          const createdPost = response.data;
          console.log(response.data);
          dispatch(payForAllSuccess(createdPost));
        })
        .catch((error) => {
          dispatch(payForAllFailure(error.message));
        });
    };
  };
  