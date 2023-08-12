/*import axios from 'axios';

export const _REQUEST = '_REQUEST';
export const _SUCCESS = '_SUCCESS';
export const _FAILURE = '_FAILURE';

export const fetchAddToFavouriteRequest = () => {
  return {
    type: _REQUEST,
  };
};

export const fetchAddToFavouriteSuccess = (todo) => {
  return {
    type: FETCH_TODO_SUCCESS,
    payload: todo,
  };
};

export const fetchAddToFavouriteFailure = (error) => {
  return {
    type: FETCH_TODO_FAILURE,
    payload: error,
  };
};

export const addToFavourite = () => {
  return (dispatch) => {
    dispatch(fetchAddToFavouriteRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        const todo = response.data;
        dispatch(fetchAddToFavouriteSuccess(todo));
      })
      .catch((error) => {
        dispatch(fetchAddToFavouriteFailure(error.message));
      });
  };
}; */


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
  return (dispatch) => {
    dispatch(addToFavouriteRequest());
    axios
      .post('https://jsonplaceholder.typicode.com/posts', postData)
      .then((response) => {
        const createdPost = response.data;
        dispatch(addToFavouriteSuccess(createdPost));
      })
      .catch((error) => {
        dispatch(addToFavouriteFailure(error.message));
      });
  };
};
