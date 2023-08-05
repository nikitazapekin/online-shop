
import { createSlice } from "@reduxjs/toolkit";

const addToFavouriteReducer = createSlice({
  name: "toolkit",
  initialState: {
    count: 0,
    todos: ['sccf', 'dsdw', 'ddwwd'],
    name: "",
    isLogged: false
  },
  reducers: {
    isAuth(state) {
        const cookiesString = document.cookie;
        const cookiesArray = cookiesString.split(';');
        const userCookie = cookiesArray.find(cookie => cookie.trim().startsWith('user='));
        console.log(userCookie)
        if (userCookie) {
           state.isLogged=true
            let userCookieValue = userCookie.split('=')[1];
            let indexOfcav=userCookieValue.lastIndexOf('}')
            let username;
          let  userCookieValueNew=userCookieValue.substring(indexOfcav+1, -userCookieValue.length)
        try {
          const userValue = JSON.parse(decodeURIComponent(userCookieValueNew));
          username = userValue.name;
          state.name = username;
        } catch (error) {
          console.error('Ошибка разбора куки user:', error);
        }
      }
    }
  }
});

export const { isAuth } = addToFavouriteReducer.actions;
export default addToFavouriteReducer.reducer;
