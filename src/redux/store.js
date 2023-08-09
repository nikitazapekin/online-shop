
import { configureStore } from "@reduxjs/toolkit";
import addToFavouriteReducer from "./reducers/isLogged.js";
import todoSlice from "./reducers/userPageCardReducer.js";
import addToFavouriteSlice from "./reducers/addToFavouriteReducer.js";
import showBoughtReducer from "./reducers/showBoughtReducer.js";
import showFavouriteReducer from "./reducers/showFavouriteReducer.js";
import navigationReducer from "./reducers/navigationReducer.js";
import testSlice from "./reducers/filteredItemsReducer.js"
import commentsReducer from "./reducers/commentsReducer.js";
import commentsAsyncReducer from "./reducers/commentsAsyncReducer.js";
import loginReducer from "./reducers/loginReducer.js";
import buyReducer from "./reducers/buyReducer.js";
import bout from "./reducers/bout.js";
//import showBoughtReducer from "./reducers/showBoughtReducer.js";
export default configureStore({
  reducer: {
    addToFavouriteReducer: addToFavouriteReducer,
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
bout: bout
  },
});
