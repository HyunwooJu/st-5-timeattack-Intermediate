// TODO: todoSlice 를 작성하세요.

import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

export const selectTodosByCompletion = createSelector(
  [(state, isDone) => state.todos, (state, isDone) => isDone],
  (todos, isDone) => todos.filter((todo) => todo.completed === isDone)
);
