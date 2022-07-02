import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL_TODO,
  CHANGE_FILTER,
  CLEAR_COMPLETED,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { todoText } = action.payload;
      const todoId = state.todoList.length.toString();
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { status: "view", text: todoText, id: todoId },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, status: todo.status === "view" ? "completed" : "view" }
            : todo
        ),
      };
    case TOGGLE_ALL_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (action.payload.complete) {
            todo.status = "completed";
          } else {
            todo.status = "view";
          }
          return todo;
        }),
      };
    case CHANGE_FILTER:
      if (action.payload.filter === "completed") {
        return { ...state, completedFilter: true, activeFilter: false };
      }
      if (action.payload.filter === "active") {
        return { ...state, activeFilter: true, completedFilter: false };
      }
      return { ...state, activeFilter: false, completedFilter: false };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.status !== "completed"),
      };
    default:
      throw new Error("Unknown action!");
  }
};

export default reducer;
