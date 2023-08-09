
import { createSlice } from "@reduxjs/toolkit";

const commentsReducer = createSlice({
  name: "toolkit",
  initialState: {
    count: 0,
    todos: ['sccf', 'dsdw', 'ddwwd'],
    name: "",
    isLogged: false,
    id: 0,
    rate: 0
  },
  reducers: {
  checkRate(state, action){
console.log(action.payload)

switch (action.payload) {
    case 0:
        state.rate = 5;
        break;
    case 2:
        state.rate = 4;
        break;
    case 4:
        state.rate = 3;
        break;
    case 6:
        state.rate = 2;
        break;
    case 8:
        state.rate = 1;
        break;
}
console.log(state.rate)
/*switch(action.payload){
    case action.payload==0 {
       state.rate=5
        break
    }
    case action.payload==2 {
        state.rate=4
         break
     }
     case action.payload==4 {
        state.rate=3
         break
     }
     case action.payload==6 {
        state.rate=2
         break
     }
     case action.payload==8 {
        state.rate=1
         break
     }
} */
  }
  }
});

export const { checkRate } = commentsReducer.actions;
export default commentsReducer.reducer;
/*
if(value==0){
    return 5
}
if(value==2){
    return 4
}
if(value==4){
    return 3
}
if(value==6){
    return 2
}
if(value==8){
    return 1
}

return 0
} 
*/