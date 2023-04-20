import { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import ErrorBoundary from "./components/ErrorBoudary";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      name: "Todo List",
    };

    this.onTodoClick = this.onTodoClick.bind(this);
    this.onTodoDelete = this.onTodoDelete.bind(this);
  }

  componentDidMount() {
    fetch("http://127.0.0.1:4173/data.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          todos: data.todos,
        });
      });
  }

  onTodoClick(todoId) {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    });
  }

  onTodoDelete(todoId) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== todoId),
    });
  }

  render() {
    return (
      <>
        <ErrorBoundary>
          <Header />

          <TodoList
            todos={this.state.todos}
            onTodoClick={this.onTodoClick}
            onTodoDelete={this.onTodoDelete}
          />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
