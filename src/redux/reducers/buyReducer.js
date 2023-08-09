
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
            
            if (!response.ok) {
                throw new Error('Server Error!');
            }
    
            const data = await response.json();
            console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const showNewBuy = createAsyncThunk(
   // 'todos',
    'todos/addNewTodo',
   
    async function (dataa, {rejectWithValue, dispatch}) {
        try {
          //  name: 'todos',
            const todo = {
             
              title: dataa,
                userId: 1,
                completed: false,
                resp: {},
                todos: []
            };
             console.log(dataa)
             let name=dataa.username;
             let tovId=dataa.id
             let userId= dataa.userId
            const response = await fetch('http://localhost:5000/buy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
       
             body: JSON.stringify({name:name, userId: userId, tovId: tovId})
            });

            if (!response.ok) {
                throw new Error('Can\'t add task. Server error.');
            }

            const data = await response.json();
            console.log(data)
            dispatch(showBuy(data));


        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const showBuySlice  = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        showBuy(state, action) {
            console.log(action.payload)
          //  state.resp=action.payload
            state.todos.push(action.payload);
            console.log("This "+state.todos)
        },
    },
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: setError,
    },
});

export const {showBuy} = showBuySlice.actions;
export default showBuySlice.reducer