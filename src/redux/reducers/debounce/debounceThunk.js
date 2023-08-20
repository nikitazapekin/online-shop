
import axios from 'axios';

export const DEBOUNCE_REQUEST = 'DEBOUNCE_REQUEST';
export const DEBOUNCE_SUCCESS = 'DEBOUNCE_SUCCESS';
export const DEBOUNCE_FAILURE = 'DEBOUNCE_FAILURE';

export const debounceRequest = () => {
  
  return {
    type: DEBOUNCE_REQUEST,
  };
};

export const debounceSuccess = (post) => {
  return {
    type: DEBOUNCE_SUCCESS,
    payload: post,
  };
};

export const debounceFailure = (error) => {
  throw new Error("bad request")
  return {
    type: DEBOUNCE_FAILURE,
    payload: error,
  };
};
export const debouncePost = (query) => {
    return (dispatch) => {
      dispatch(debounceRequest());
      axios
        .get('http://localhost:5000/tovars') 
        .then((response) => {
          const fetchedData = response.data;
          if (fetchedData !== undefined) {
            const filteredItems =  fetchedData.data.filter((item) =>
              item.title.toLowerCase().includes(query.toLowerCase())
            );
            dispatch(debounceSuccess(filteredItems));
          }
        })
        .catch((error) => {
          dispatch(debounceFailure(error.message));
        });
    };
  };
  