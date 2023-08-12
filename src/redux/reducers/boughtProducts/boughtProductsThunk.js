
import axios from 'axios';

export const BUY_PRODUCTS_REQUEST = 'TOVAR_REQUEST';
export const BUY_PRODUCTS_SUCCESS = 'TOVAR_SUCCESS';
export const BUY_PRODUCTS_FAILURE = 'TOVAR_FAILURE';

export const buyProductsRequest = () => {
    console.log("tov reqquest")
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
  return {
    type: BUY_PRODUCTS_FAILURE,
    payload: error,
  };
};
export const buyProductsPost = (postData) => {
  //  const data = { userId: postData.userId, tovId: postData.id, name: postData.username  }; 
  const data={name: postData.name}
    return (dispatch) => {
      dispatch(buyProductsRequest());
      axios
        .post('http://localhost:5000/bought', (data)) 
        .then((response) => {
          console.log(12333);
          const createdPost = response.data;
          console.log(response.data);
          dispatch(buyProductsSuccess(createdPost));
        })
        .catch((error) => {
          dispatch(buyProductsFailure(error.message));
        });
    };
  };
  