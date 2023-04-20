import { Component } from "react";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

export default class TodoItem extends Component {
  componentDidMount() {
    console.log(`component did mount - ${this.props.label}`);
  }

  componentDidUpdate() {
    console.log(`component did update - ${this.props.label}`);
  }

  componentWillUnmount() {
    console.log(`component will unmount - ${this.props.label}`);
  }

  render() {
    return (
      <ListGroup.Item>
        <span
          onClick={() => this.props.onClick(this.props.id)}
          style={{
            textDecoration: this.props.isCompleted ? "line-through" : "",
          }}
        >
          {this.props.label}
        </span>
        <Button
          onClick={() => this.props.onDelete(this.props.id)}
          variant="danger"
        >
          Delete
        </Button>
      </ListGroup.Item>
    );
  }
}
