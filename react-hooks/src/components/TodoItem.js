import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { Button, ListGroup } from "react-bootstrap";

export const TodoItem = ({ _id, text, isCompleted }) => {
  const { onTodoDeleteClick, onTodoClick } = useContext(TodoContext);

  return (
    <ListGroup.Item
      action
      onClick={() => onTodoClick(_id)}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <p style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {text}
      </p>
      <Button onClick={() => onTodoDeleteClick(_id)} variant="dark">
        X
      </Button>
    </ListGroup.Item>
  );
};
