import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counterSlice";
import toggleReducer from "../reducer/toggleSlice";
import todoReducer from "../reducer/todoSlice";
import todoByIdReducer from "../reducer/todoDynamicSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toggle: toggleReducer,
    todo: todoReducer,
    todoById: todoByIdReducer
  },
});
