import React from "react";
import { CHANGE_FILTER, CLEAR_COMPLETED } from "../context/actions";
import { useTodoContext } from "../context/todoContext";

const TodoFooter = () => {
  const { todoList, activeFilter, completedFilter, dispatch } =
    useTodoContext();
  if (todoList.length < 1) {
    return;
  }
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>
          {
            todoList.filter((item) => {
              return item.status !== "completed";
            }).length
          }
        </strong>{" "}
        items left
      </span>

      <ul className='filters'>
        <li>
          <button
            onClick={() =>
              dispatch({
                type: CHANGE_FILTER,
                payload: {
                  filter: "all",
                },
              })
            }
            className={!activeFilter && !completedFilter ? "selected" : ""}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              dispatch({
                type: CHANGE_FILTER,
                payload: { filter: "active" },
              })
            }
            className={activeFilter ? "selected" : ""}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              dispatch({
                type: CHANGE_FILTER,
                payload: { filter: "completed" },
              });
            }}
            className={completedFilter ? "selected" : ""}
          >
            Completed
          </button>
        </li>
      </ul>

      {todoList.filter((todo) => todo.status === "completed").length > 0 && (
        <button
          onClick={() => {
            dispatch({ type: CLEAR_COMPLETED });
          }}
          className='clear-completed'
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default TodoFooter;
