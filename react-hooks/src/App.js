import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { AddTodoModal } from "./components/AddTodoModal";
import { TodoContext } from "./contexts/TodoContext";

const baseUrl = "http://localhost:3030/jsonstore/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setTodos(Object.values(data)));
  }, []);

  const onTodoAddSubmit = async (values) => {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const result = await response.json();

    setShowAddTodo(false);
    setTodos((state) => [...state, result]);

    console.log(result);
    return result;
  };

  const onTodoDeleteClick = async (todoId) => {
    await fetch(`${baseUrl}/${todoId}`, {
      method: "DELETE",
    });

    setTodos((state) => state.filter((x) => x._id !== todoId));
  };

  const onTodoAddClick = () => {
    setShowAddTodo(true);
  };

  const onTodoAddClose = () => {
    setShowAddTodo(false);
  };

  const contextValue = {
    onTodoDeleteClick,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      <div className="App">
        <Header />

        <TodoList todos={todos} onTodoAddClick={onTodoAddClick} />

        <AddTodoModal
          show={showAddTodo}
          close={onTodoAddClose}
          onTodoAddSubmit={onTodoAddSubmit}
        />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
