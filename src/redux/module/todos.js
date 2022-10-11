const init = [
  { id: 0, title: "맥북사기" },
  { id: 1, title: "아이패드사기" },
];

// action
const ADD_TODO = "ADD_TODO";

// action creator
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  };
};

// reducer
const todos = (state = init, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: state[state.length - 1].id + 1, title: action.todo },
      ];
    default:
      return state;
  }
};

export default todos;
