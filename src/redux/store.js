
import thunkMiddleware from 'redux-thunk';
import addToFavouriteReducer from "./reducers/addToFav/addToFavReducer.js";
import buyTovarReducer from "./reducers/buyTovar/buyTovarReducer.js";
import tovarReducer from "./reducers/tovarInfo/tovarInfoReducer.js";
import buyProductsReducer from "./reducers/boughtProducts/boughtProductsReducer.js";
import showFvReducer from "./reducers/showFavourite/showFavouriteReducer.js";
import removeFvReducer from "./reducers/removeFromFav/removeFromFavReducer.js";
import payForAllReducer from "./reducers/payForAll/payForAllReducer.js";
import sliderReducer from "./reducers/slider/sliderReducer.js";
import productsPagesReducer from "./reducers/productsPages/productsPagesReducer.js";
import foundPageItemsReducer from "./reducers/foundPageItems/foundPageItemsReducer.js";
import userPageReducer from "./reducers/userPageCard/userPageCardReducer.js";
import cataloguePageItemReducer from "./reducers/cataloguePageItem/cataloguePageItemReducer.js";
import registerReducer from "./reducers/register/registerReducer.js";
import loginReducer from "./reducers/login/loginReducer.js";
import commentsReducer from "./reducers/comments/commentsReducer.js";
import { combineReducers, createStore, applyMiddleware } from 'redux';
const rootReducer = combineReducers({
    addToFavouriteReducer: addToFavouriteReducer,
    tovarReducer: tovarReducer,
    buyTovarReducer: buyTovarReducer,
    buyProductsReducer: buyProductsReducer,
    showFvReducer: showFvReducer,
    removeFvReducer: removeFvReducer,
    payForAllReducer: payForAllReducer,
    sliderReducer: sliderReducer,
    productsPagesReducer: productsPagesReducer,
    foundPageItemsReducer: foundPageItemsReducer,
    userPageReducer: userPageReducer,
    cataloguePageItemReducer: cataloguePageItemReducer,
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    commentsReducer: commentsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));