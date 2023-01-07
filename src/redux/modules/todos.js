import uuid from "react-uuid";

// 01. ACTION ITEMS

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const SWITCH_TODO = "SWITCH_TODO";

// 02. ACTION CREATERS

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const swtichTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

// 03. initial state

const initialState = [
  {
    title: "제목1",
    contents: "내용1",
    isDone: false,
    id: uuid(),
  },

  {
    title: "제목2",
    contents: "내용2",
    isDone: false,
    id: uuid(),
  },

  {
    title: "제목3",
    contents: "내용3",
    isDone: true,
    id: uuid(),
  },

  {
    title: "제목4",
    contents: "내용4",
    isDone: false,
    id: uuid(),
  },
];
// 04. reducers

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter((q) => q.id !== action.payload);

    case SWITCH_TODO:
      return state.map((q) => {
        if (q.id === action.payload) {
          return { ...q, isDone: !q.isDone };
        } else {
          return q;
        }
      });

    default:
      return state;
  }
};

export default todos;
