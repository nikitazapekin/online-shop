import axios from 'axios';

export const SLIDER_REQUEST = 'SLIDER_REQUEST';
export const SLIDER_SUCCESS = 'SLIDER_SUCCESS';
export const SLIDER_FAILURE = 'SLIDER_FAILURE';

export const sliderRequest = () => {
  return {
    type: SLIDER_REQUEST,
  };
};

export const sliderSuccess = (post) => {
  return {
    type: SLIDER_SUCCESS,
    payload: post,
  };
};

export const sliderFailure = (error) => {
  return {
    type: SLIDER_FAILURE,
    payload: error,
  };
};

export const fetchSliderData = () => {
  return (dispatch) => {
    dispatch(sliderRequest());
    axios
      .get('http://localhost:5000/tovarss') 
      .then((response) => {
        const fetchedData = response.data;
        console.log(response.data);
        dispatch(sliderSuccess(fetchedData));
      })
      .catch((error) => {
        dispatch(sliderFailure(error.message));
      });
  };
};
