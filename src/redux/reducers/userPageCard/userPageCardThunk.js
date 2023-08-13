
import axios from 'axios';

export const USER_PAGE_REQUEST = 'USER_PAGE_REQUEST';
export const USER_PAGE_SUCCESS = 'USER_PAGE_SUCCESS';
export const USER_PAGE_FAILURE = 'USER_PAGE_FAILURE';

export const userPageRequest = () => {
    console.log("tov reqquest")
  return {
    type: USER_PAGE_REQUEST,
  };
};

export const userPageSuccess = (post) => {
  return {
    type: USER_PAGE_SUCCESS,
    payload: post,
  };
};

export const userPageFailure = (error) => {
  return {
    type: USER_PAGE_FAILURE,
    payload: error,
  };
};
export const postUser = (postData) => {
    console.log("func");
    console.log(postData);
    const data =postData; 
    return (dispatch) => {
      dispatch(userPageRequest());
      axios
        .post('http://localhost:5000/userId', data) 
        .then((response) => {
    
          const createdPost = response.data;
          console.log(response.data);
          dispatch(userPageSuccess(createdPost));
        })
        .catch((error) => {
          dispatch(userPageFailure(error.message));
        });
    };
  };
  