import React from "react";
import { useSelector } from "react-redux";
import { selectTodosByCompletion } from "../../src/redux/slices/todoSlice";
import TodoItem from "./TodoItem";

export default function TodoList({ isDone }) {
  const todos = useSelector((state) => selectTodosByCompletion(state, isDone));

  return (
    <section>
      <h2>{isDone ? "Done..." : "Working..."}</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}
