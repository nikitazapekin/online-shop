
import { configureStore } from "@reduxjs/toolkit";
import addToFavouriteReducer from "./reducers/isLogged.js";
import todoSlice from "./reducers/userPageCardReducer.js";
import addToFavouriteSlice from "./reducers/addToFavouriteReducer.js";
import showBoughtReducer from "./reducers/showBoughtReducer.js";
import showFavouriteReducer from "./reducers/showFavouriteReducer.js";
import navigationReducer from "./reducers/navigationReducer.js";
//import  filteredTodos  from "./reducers/filteredItemsReducer.js";
//import { filteredTodos } from "./reducers/filteredItemsReducer.js";
import testSlice from "./reducers/filteredItemsReducer.js"
export default configureStore({
  reducer: {
    addToFavouriteReducer: addToFavouriteReducer,
   todos: todoSlice,
   addToFavouriteSlice: addToFavouriteSlice,
  favourite: showFavouriteReducer,
  bought: showBoughtReducer,
  navig: navigationReducer,
 // filteredTodos: filteredTodos
 testSlice: testSlice
 // filteredTodos: filteredTodos
  },
});
