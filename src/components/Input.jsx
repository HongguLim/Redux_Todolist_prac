import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { addTodo } from "../redux/modules/todos";

export default function Input() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      제목:
      <input
        type="text"
        onChange={(event) => setTitle(event.target.value)}
        vaule={title}
      />
      내용:
      <input
        type="text"
        onChange={(event) => setContents(event.target.value)}
        vaule={contents}
      />
      <button
        onClick={() => {
          const newTodo = {
            title,
            contents,
            isDone: false,
            id: uuid(),
          };
          dispatch(addTodo(newTodo));
        }}
      >
        추가하기
      </button>
    </div>
  );
}
