import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducer/counterSlice'
import toggleReducer from '../reducer/toggleSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toggle: toggleReducer,
  },
})