import ListGroup from "react-bootstrap/ListGroup";
import { TodoItem } from "./TodoItem";
import { Button } from "react-bootstrap";

export const TodoList = ({ todos, onTodoAddClick }) => {
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Todo List</h1>

      <ListGroup style={{ marginBottom: "10px" }}>
        {todos.map((x) => (
          <TodoItem key={x._id} {...x} />
        ))}
      </ListGroup>

      <Button onClick={onTodoAddClick} variant="primary">
        Add
      </Button>
    </div>
  );
};
