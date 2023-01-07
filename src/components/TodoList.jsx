import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, swtichTodo } from "../redux/modules/todos";

export default function TodoList({ isActive }) {
  const todos = useSelector(function (state) {
    return state.todos;
  });
  const dispatch = useDispatch();
  return (
    <div>
      {isActive ? "해야할일" : "완료한일"}
      {todos
        .filter((item) => item.isDone !== isActive)
        .map((item) => {
          return (
            <div
              key={item.id}
              style={{ border: "1px solid black", margin: "10px" }}
            >
              <p>{item.title}</p>
              <p>{item.contents}</p>
              <button
                onClick={() => {
                  return dispatch(swtichTodo(item.id));
                }}
              >
                {isActive ? "완료" : "취소"}
              </button>
              <button
                onClick={() => {
                  return dispatch(removeTodo(item.id));
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
    </div>
  );
}
