import { useState } from "react";
import "./App.css";
import { Header, Footer, List, TodoFooter } from "./components/";
import { TOGGLE_ALL_TODO } from "./context/actions";
import { useTodoContext } from "./context/todoContext";

function App() {
  const { dispatch } = useTodoContext();
  const [toggleAllComplete, setToggleAllComplete] = useState(true);
  return (
    <>
      <section className='todoapp'>
        <Header />
        <section className='main'>
          <button
            onClick={() => {
              dispatch({
                type: TOGGLE_ALL_TODO,
                payload: {
                  complete: toggleAllComplete,
                },
              });
              setToggleAllComplete(!toggleAllComplete);
            }}
            className='toggle-all-todo'
          >
            ❯
          </button>
          <List />
        </section>
        <TodoFooter />
      </section>
      <Footer />
    </>
  );
}

export default App;
