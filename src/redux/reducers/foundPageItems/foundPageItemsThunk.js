
import axios from 'axios';

export const FOUND_PAGE_ITEMS_REQUEST = 'FOUND_PAGE_ITEMS_REQUEST';
export const FOUND_PAGE_ITEMS_SUCCESS = 'FOUND_PAGE_ITEMS_SUCCESS';
export const FOUND_PAGE_ITEMS_FAILURE = 'FOUND_PAGE_ITEMS_FAILURE';

export const foundPageItemsRequest = () => {
  return {
    type: FOUND_PAGE_ITEMS_REQUEST,
  };
};

export const foundPageItemsSuccess = (post) => {
  return {
    type: FOUND_PAGE_ITEMS_SUCCESS,
    payload: post,
  };
};

export const foundPageItemsFailure = (error) => {
  return {
    type: FOUND_PAGE_ITEMS_FAILURE,
    payload: error,
  };
};





export const foundPageItemsPost = (id) => {
    console.log("DAT"+JSON.stringify(id))
    return (dispatch) => {
      dispatch(foundPageItemsRequest());
      axios
        .get("http://localhost:5000/tovarss") 
        .then((response) => {
          const fetchedData = response.data;
          console.log(response.data.data);
          const filteredItems = (response.data.data).filter((item) =>
item.title.toLowerCase().includes(id.id.toLowerCase())
)
console.log("Filt")
console.log(filteredItems)
          dispatch(foundPageItemsSuccess(filteredItems));
        })
        .catch((error) => {
          dispatch(foundPageItemsFailure(error.message));
        });
    };
  };
  
/*
export const foundPageItemsPost = (postData) => {
  const data=postData
  console.log(data)
  
  return (dispatch) => {
    dispatch(foundPageItemsRequest());
    axios
      .post('http://localhost:5000/tovarss', postData)
      .then((response) => {
        const createdPost = response.data;
        dispatch(foundPageItemsSuccess(createdPost));
      })
      .catch((error) => {
        dispatch(foundPageItemsFailure(error.message));
      });
  };
};
*/