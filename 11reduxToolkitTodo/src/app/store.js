import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
// create a store
export const store = configureStore({ reducer: todoReducer});
