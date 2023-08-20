
import axios from 'axios';

export const BUY_PRODUCTS_REQUEST = 'TOVAR_REQUEST';
export const BUY_PRODUCTS_SUCCESS = 'TOVAR_SUCCESS';
export const BUY_PRODUCTS_FAILURE = 'TOVAR_FAILURE';

export const buyProductsRequest = () => {
  
  return {
    type: BUY_PRODUCTS_REQUEST,
  };
};

export const buyProductsSuccess = (post) => {
  return {
    type: BUY_PRODUCTS_SUCCESS,
    payload: post,
  };
};

export const buyProductsFailure = (error) => {
  throw new Error("bad request")
  return {
    type: BUY_PRODUCTS_FAILURE,
    payload: error,
  };
};
export const buyProductsPost = (postData) => {
  const data={name: postData.name}
    return (dispatch) => {
      dispatch(buyProductsRequest());
      axios
        .post('http://localhost:5000/bought', (data)) 
        .then((response) => {
          const createdPost = response.data;
         
          dispatch(buyProductsSuccess(createdPost));
        })
        .catch((error) => {
          dispatch(buyProductsFailure(error.message));
        });
    };
  };
  