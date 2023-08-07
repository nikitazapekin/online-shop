
/*
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const filteredTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch('http://localhost:5000/tovars');
//console.log(id)
      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const dataa = await response.json();
      const filteredItems = dataa.data.filter((item) =>
      item.title.toLowerCase().includes(id.id.toLowerCase())
     
      );
      console.log(filteredItems)

    return filteredItems
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const showNewFiltered = createAsyncThunk(
  'todos/addNewTodo',
  async function (dataa, { rejectWithValue, dispatch }) {
    try {
      const todo = {
        title: dataa,
        userId: 1,
        completed: false,
        resp: {},
        todos: []
      };
      console.log(dataa);

      const response = await fetch('http://localhost:5000/tovars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo), // Make sure to stringify the data before sending it.
      });

      if (!response.ok) {
        throw new Error('Can\'t add task. Server error.');
      }

      const data = await response.json();
      console.log(data);
      dispatch(showFiltered(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
}

const filteredSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    showFiltered(state, action) {
      console.log(action.payload);
      state.todos.push(action.payload);
      console.log("This " + state.todos);
    },
    showSearchFiltered(state, action) {
      console.log(1111)
      console.log(action.payload);
    }
  },
  extraReducers: {
    [filteredTodos.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [filteredTodos.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.todos = action.payload;
    },
    [filteredTodos.rejected]: setError,
 
  },
});

export const { showFiltered, showSearchFiltered } = filteredSlice.actions;
export default filteredSlice.reducer;
*/


// reduxSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Создаем асинхронную функцию с помощью createAsyncThunk
export const test = createAsyncThunk('test/testAction', async (payload) => {
  console.log("AAAA" +JSON.stringify(payload))
  const id=payload.id
  try {
    const response = await fetch('http://localhost:5000/tovarss');
    if (!response.ok) {
      throw new Error('Server Error!');
    }
    const dataa = await response.json();
    console.log(dataa)
    const filteredItems = dataa.filter((item) =>
    item.title.toLowerCase().includes(id.toLowerCase())
  );
//return dataa
  return filteredItems
  } catch (error) {
    return error
  }
});
const testSlice = createSlice({
  name: 'test',
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setData (state, action)  {
      state.data=action.payload
      console.log((state.data).payload)
    },
  },
  extraReducers: (builder) => {
    
    builder
      .addCase(test.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(test.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(test.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});


export const { setData } = testSlice.actions;
export default testSlice.reducer;
