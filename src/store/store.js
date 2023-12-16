import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counterSlice";
import toggleReducer from "../reducer/toggleSlice";
import todoReducer from "../reducer/todoSlice";
import todoByIdReducer from "../reducer/todoDynamicSlice";
import registerReducer from "../reducer/registerSlice";

const saveTokenMiddleware = () => (next) => (action) => {
  if (action.type === "register/fetchRegisterUser/fulfilled") {
    const response = action.payload;
    const token = response?.token;
    console.log("Middleware Response", response);
    console.log("Middleware Token", token);
    localStorage.setItem("token", token);
  }
  next(action);
};
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toggle: toggleReducer,
    todo: todoReducer,
    todoById: todoByIdReducer,
    register: registerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(saveTokenMiddleware),
});

// export default store;
