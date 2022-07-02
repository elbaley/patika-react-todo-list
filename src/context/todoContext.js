import React, { useReducer, useContext } from "react";
import reducer from "./reducer";

const initialState = {
  todoList: [],
  activeFilter: false,
  completedFilter: false,
  toggleAll: false,
};

const todoContext = React.createContext();

const TodoProvider = ({ children }) => {
  const [todoState, dispatch] = useReducer(reducer, initialState);

  return (
    <todoContext.Provider value={{ ...todoState, dispatch }}>
      {children}
    </todoContext.Provider>
  );
};

const useTodoContext = () => {
  return useContext(todoContext);
};

export { TodoProvider, initialState, useTodoContext };
