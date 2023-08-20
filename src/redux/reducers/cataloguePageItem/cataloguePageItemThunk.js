
import axios from 'axios';

export const CATALOGUE_PAGE_ITEM_REQUEST = 'USER_PAGE_REQUEST';
export const CATALOGUE_PAGE_ITEM_SUCCESS = 'USER_PAGE_SUCCESS';
export const CATALOGUE_PAGE_ITEM_FAILURE = 'USER_PAGE_FAILURE';

export const cataloguePageItemRequest = () => {
    console.log("tov reqquest")
  return {
    type: CATALOGUE_PAGE_ITEM_REQUEST,
  };
};

export const cataloguePageItemSuccess = (post) => {
  return {
    type: CATALOGUE_PAGE_ITEM_SUCCESS,
    payload: post,
  };
};

export const cataloguePageItemFailure = (error) => {
  return {
    type: CATALOGUE_PAGE_ITEM_FAILURE,
    payload: error,
  };
};
export const postCataloguePageItem = (postData) => {
    const data =postData; 
    return (dispatch) => {
      dispatch(cataloguePageItemRequest());
      axios
        .post('http://localhost:5000/id', data) 
        .then((response) => {
    
          const createdPost = response.data;
          dispatch(cataloguePageItemSuccess(createdPost));
        })
        .catch((error) => {
          dispatch(cataloguePageItemFailure(error.message));
        });
    };
  };
  