
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodosNavig = createAsyncThunk(
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
export const navigationNewTodo = createAsyncThunk(
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
            const response = await fetch('http://localhost:5000/userId', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: dataa,
            });

            if (!response.ok) {
                throw new Error('Can\'t add task. Server error.');
            }

            const data = await response.json();
            console.log(data)
            dispatch(navigationTodo(data));


        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

 const  navigationSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
      navigationTodo(state, action) {
            console.log(action.payload)
          //  state.resp=action.payload
            state.todos.push(action.payload);
            console.log("This "+state.todos)
        },
    },
    extraReducers: {
        [fetchTodosNavig.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTodosNavig.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.todos = action.payload;
        },
        [fetchTodosNavig.rejected]: setError,
    },
});

export const {navigationTodo} = navigationSlice.actions;
export default navigationSlice.reducer