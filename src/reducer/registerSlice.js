import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRegisterUser = createAsyncThunk(
  "register/fetchRegisterUser",
  async (userData) => {
    try {
      const response = await fetch("https://reqres.in/api/register", {
        // method sesuai API
        method: "POST",
        //header cek di network Headers Content-Type
        headers: {
          "Content-Type": "application/json",
        },
        //isi Body sesuai API
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error("Login Fail");
      }
      //Respon sukses
      console.log("respon berhasil");
      const data = await response.json();
      return data;
    } catch (error) {
      //Respon Gagal
      console.error(error);
      throw error;
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    response: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegisterUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRegisterUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.response = action.payload;
      })
      .addCase(fetchRegisterUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default registerSlice.reducer;
