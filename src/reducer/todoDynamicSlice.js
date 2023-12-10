import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//fetching data todos
export const fetchToDoById = createAsyncThunk(
  "todos/fetchToDoById",
  async (todoId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );
    const data = await response.json();
    return data;
  }
);

//slice / reducer
const todoByIdSlice = createSlice({
  //nama state
  name: "todoById",
  initialState: {
    todo: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Loading, Simpan ke state 'status'
      .addCase(fetchToDoById.pending, (state) => {
        state.status = "loading";
      })
      // Success, Simpan ke state 'status'
      // Data, Simpan ke state 'todos'
      .addCase(fetchToDoById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todo = action.payload;
      })
      // Fail, Simpan ke state 'status'
      // Error, Simpan ke state 'error'
      .addCase(fetchToDoById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default todoByIdSlice.reducer;
