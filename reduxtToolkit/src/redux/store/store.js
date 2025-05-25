import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../sllice/todoSlice';

export const store = configureStore({
   reducer: todoReducer,
});