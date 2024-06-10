import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/slices/todoSlice";

// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {todo.title}</p>
        <p>내용: {todo.content}</p>
      </section>
      <section>
        <button onClick={() => dispatch(toggleTodo(todo.id))}>
          {todo.completed ? "취소" : "완료"}
        </button>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>삭제</button>
      </section>
    </li>
  );
}
