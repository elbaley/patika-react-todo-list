import { REMOVE_TODO, TOGGLE_TODO } from "../context/actions";
import { useTodoContext } from "../context/todoContext";

const List = () => {
  const { todoList, activeFilter, completedFilter, dispatch } =
    useTodoContext();

  return (
    <ul className='todo-list'>
      {todoList
        ?.filter((item) => {
          if (activeFilter) {
            return item.status === "view";
          }
          if (completedFilter) {
            return item.status === "completed";
          }
          return item;
        })
        ?.map((todo, index) => {
          return (
            <li className={todo.status} key={index}>
              <div className='view'>
                <input
                  className='toggle'
                  type='checkbox'
                  onChange={() => {
                    dispatch({ type: TOGGLE_TODO, payload: { id: todo.id } });
                  }}
                  checked={todo.status === "completed"}
                />
                <label> {todo.text}</label>
                <button
                  onClick={() =>
                    dispatch({ type: REMOVE_TODO, payload: { id: todo.id } })
                  }
                  className='destroy'
                ></button>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default List;
