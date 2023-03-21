import { Button, ListGroup } from "react-bootstrap";

export const TodoItem = ({ _id, text, isCompleted, onTodoDeleteClick }) => {
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
