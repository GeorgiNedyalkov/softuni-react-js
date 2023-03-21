import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { Button, ListGroup } from "react-bootstrap";

export const TodoItem = ({ _id, text, isCompleted }) => {
  const { onTodoDeleteClick } = useContext(TodoContext);

  return (
    <ListGroup.Item
      action
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      {text}
      <Button onClick={() => onTodoDeleteClick(_id)} variant="dark">
        X
      </Button>
    </ListGroup.Item>
  );
};
