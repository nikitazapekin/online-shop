
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
export const loginNewTodo = createAsyncThunk(
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
            const response = await fetch('http://localhost:5000/login', {
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
            console.log("DAT")
            console.log(data)
            if (data != "is non registered") {
            

                const dat = JSON.stringify({ id: data.id });
                const responseData = await fetch('http://localhost:5000/userId', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: dat,
                });
    
                if (!responseData.ok) {
                    throw new Error('Can\'t add task. Server error.');
                }
    
                const res = await responseData.json();
                console.log(res)
                dispatch(loginTodo(res));
                let expirationDate = new Date();
                expirationDate.setTime(
                  expirationDate.getTime() + 7 * 24 * 60 * 60 * 1000
                ); 
          
                  document.cookie =
                  `user=${JSON.stringify({
                    name: res.username,
                    isLogged: true,
                    id: res.id,
                  })}expires=` + expirationDate.toUTCString();
            }


        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

 const  loginSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
     loginTodo(state, action) {
            console.log("Aaaa"+JSON.stringify(action.payload))
let el=action.payload
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

export const {loginTodo} = loginSlice.actions;
export default loginSlice.reducer