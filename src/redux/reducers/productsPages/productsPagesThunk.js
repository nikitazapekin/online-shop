import axios from 'axios';

export const PRODUCTS_PAGES_REQUEST = 'PRODUCTS_PAGRS_REQUEST';
export const PRODUCTS_PAGES_SUCCESS = 'PRODUCTS_PAGRS_SUCCESS';
export const PRODUCTS_PAGES_FAILURE = 'PRODUCTS_PAGRS_FAILURE';

export const productsPagesRequest = () => {
  return {
    type: PRODUCTS_PAGES_REQUEST,
  };
};

export const productsPagesSuccess = (post) => {
  return {
    type: PRODUCTS_PAGES_SUCCESS,
    payload: post,
  };
};

export const productsPagesFailure = (error) => {
  return {
    type: PRODUCTS_PAGES_FAILURE,
    payload: error,
  };
};




export const productsPagesPost = (currentPage) => {
    console.log("DAT"+currentPage)
    return (dispatch) => {
      dispatch(productsPagesRequest());
      axios
        .get(`http://localhost:5000/tovars?_limit=20&_page=${currentPage}`) 
        .then((response) => {
          const fetchedData = response.data;
          dispatch(productsPagesSuccess(fetchedData));
        })
        .catch((error) => {
          dispatch(productsPagesFailure(error.message));
        });
    };
  };
  









