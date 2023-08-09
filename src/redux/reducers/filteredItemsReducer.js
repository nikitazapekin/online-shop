
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
