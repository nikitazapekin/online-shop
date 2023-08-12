
import { configureStore } from "@reduxjs/toolkit";
//import addToFavouriteReducer from "./reducers/isLogged.js";
import todoSlice from "./reducers/userPageCardReducer.js";
import addToFavouriteSlice from "./reducers/addToFavouriteActions.js";

import showBoughtReducer from "./reducers/showBoughtReducer.js";
import showFavouriteReducer from "./reducers/showFavouriteReducer.js";
import navigationReducer from "./reducers/navigationReducer.js";
import testSlice from "./reducers/filteredItemsReducer.js"
import commentsReducer from "./reducers/commentsReducer.js";
import commentsAsyncReducer from "./reducers/commentsAsyncReducer.js";
import loginReducer from "./reducers/loginReducer.js";
import buyReducer from "./reducers/buyReducer.js";
import bout from "./reducers/bout.js";
import coommRed from "./coommRed.js";
import thunkMiddleware from 'redux-thunk';
import addToFavouriteReducer from "./reducers/addToFav/addToFavReducer.js";

import buyTovarReducer from "./reducers/buyTovar/buyTovarReducer.js";
import tovarReducer from "./reducers/tovarInfo/tovarInfoReducer.js";
import buyProductsReducer from "./reducers/boughtProducts/boughtProductsReducer.js";
//import showBoughtReducer from "./reducers/showBoughtReducer.js";

/*export default configureStore({
  reducer: {
   // addToFavouriteReducer: addToFavouriteReducer,
   todos: todoSlice,
   addToFavouriteSlice: addToFavouriteSlice,
  favourite: showFavouriteReducer,
  bought: showBoughtReducer,
  navig: navigationReducer,
 commentsReducer: commentsReducer,
 testSlice: testSlice, 
 commentsAsyncReducer: commentsAsyncReducer,
 loginReducer: loginReducer,
buyReducer: buyReducer,
bout: bout,
coommRed: coommRed
  },
});
*/


/*
export default configureStore({
  reducer: {
    //addToFavouriteReducer: addToFavouriteReducer,
    todos: todoSlice,
    addToFavouriteSlice: addToFavouriteSlice,
    favourite: showFavouriteReducer,
    bought: showBoughtReducer,
    navig: navigationReducer,
    commentsReducer: commentsReducer,
    testSlice: testSlice,
    commentsAsyncReducer: commentsAsyncReducer,
    loginReducer: loginReducer,
    buyReducer: buyReducer,
    bout: bout,
    //=========
    addToFavouriteReducer: addToFavouriteReducer,
    tovarReducer: tovarReducer,
  },
  middleware: [thunkMiddleware], 
}); 
*/
import { combineReducers, createStore, applyMiddleware } from 'redux';
const rootReducer = combineReducers({
  todos: todoSlice,
    addToFavouriteSlice: addToFavouriteSlice,
    favourite: showFavouriteReducer,
    bought: showBoughtReducer,
    navig: navigationReducer,
    commentsReducer: commentsReducer,
    testSlice: testSlice,
    commentsAsyncReducer: commentsAsyncReducer,
    loginReducer: loginReducer,
    buyReducer: buyReducer,
    bout: bout,
    //=========
    addToFavouriteReducer: addToFavouriteReducer,
    tovarReducer: tovarReducer,
    buyTovarReducer: buyTovarReducer,
    buyProductsReducer: buyProductsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));