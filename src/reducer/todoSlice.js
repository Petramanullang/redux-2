import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//fetching data todos
export const fetchToDo = createAsyncThunk("todos/fetchToDo", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
});

//slice / reducer
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todo: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    // Loading, Simpan ke state 'status'
      .addCase(fetchToDo.pending, (state) => {
        state.status = "loading";
      })
      // Success, Simpan ke state 'status'
      // Data, Simpan ke state 'todos'
      .addCase(fetchToDo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todo = action.payload;
      })
      // Fail, Simpan ke state 'status'
      // Error, Simpan ke state 'error'
      .addCase(fetchToDo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;