import { AddTodoModal } from "./components/AddTodoModal";
import { TodoList } from "./components/TodoList";
import { useState, useEffect } from "react";

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

  const onTodoAddClick = () => {
    setShowAddTodo(true);
  };

  const onTodoAddClose = () => {
    setShowAddTodo(false);
  };

  const onTodoDeleteClick = async (todoId) => {
    await fetch(`${baseUrl}/${todoId}`, {
      method: "DELETE",
    });

    setTodos((state) => state.filter((x) => x._id !== todoId));
  };

  return (
    <div className="App">
      <h1>React Hooks</h1>

      <TodoList
        todos={todos}
        onTodoAddClick={onTodoAddClick}
        onTodoDeleteClick={onTodoDeleteClick}
      />

      <AddTodoModal
        show={showAddTodo}
        close={onTodoAddClose}
        onTodoAddSubmit={onTodoAddSubmit}
      />
    </div>
  );
}

export default App;
