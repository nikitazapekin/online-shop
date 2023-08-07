
import { createSlice } from "@reduxjs/toolkit";

const addToFavouriteReducer = createSlice({
  name: "toolkit",
  initialState: {
    count: 0,
    todos: ['sccf', 'dsdw', 'ddwwd'],
    name: "",
    isLogged: false,
    id: 0
  },
  reducers: {
    isAuth(state) {
        const cookiesString = document.cookie;
        const cookiesArray = cookiesString.split(';');
        const userCookie = cookiesArray.find(cookie => cookie.trim().startsWith('user='));
        console.log(userCookie)
        if(userCookie==undefined){
          state.isLogged=false
        }
        if (userCookie) {
           state.isLogged=true
            let userCookieValue = userCookie.split('=')[1];
            let indexOfcav=userCookieValue.lastIndexOf('}')
            let username;
          let  userCookieValueNew=userCookieValue.substring(indexOfcav+1, -userCookieValue.length)
        try {
          const userValue = JSON.parse(decodeURIComponent(userCookieValueNew));
          console.log(userValue)
          username = userValue.name;
          state.name = username;
          state.id=userValue.id
        } catch (error) {
          console.error('Ошибка разбора куки user:', error);
        }
      }
    },
    deleteAllCookies(state, action){
      document.cookie = action.payload + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    },
  addCookie(state, action){
console.log(action.payload)
  },
    registerAction(state, action){
      console.log(1)
      console.log(action.payload)
//console.log(action.payload)
    }
  }
});

export const { isAuth,  deleteAllCookies, registerAction, addCookie } = addToFavouriteReducer.actions;
export default addToFavouriteReducer.reducer;
