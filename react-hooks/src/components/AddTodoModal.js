import { useForm } from "../hooks/useForm";
import { Modal, Button, Form } from "react-bootstrap";

export const AddTodoModal = ({ onTodoAddSubmit, show, close }) => {
  const { formValues, onChangeHandler, onSubmit } = useForm(
    { text: "" },
    onTodoAddSubmit
  );

  return (
    <Modal show={show} onHide={close} onEscapeKeyDown={close}>
      <Modal.Header closeButton>
        <Modal.Title>Add Todo</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Todo</Form.Label>
            <Form.Control
              type="text"
              name="text"
              placeholder="Do the dishes"
              value={formValues.name}
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ marginRight: "10px" }}
          >
            Add
          </Button>
          <Button onClick={close} variant="secondary">
            Close
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
