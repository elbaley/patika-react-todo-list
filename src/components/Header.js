import { useState } from "react";
import { ADD_TODO } from "../context/actions";
import { useTodoContext } from "../context/todoContext";
const Header = () => {
  const { dispatch } = useTodoContext();

  const [todoText, setTodoText] = useState("");
  const handleChange = (e) => {
    setTodoText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText === "") return;
    dispatch({ type: ADD_TODO, payload: { todoText: todoText } });
    setTodoText("");
  };
  return (
    <header className='header'>
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          autoFocus
          value={todoText}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Header;
