import { useState, useContext } from "react";
import { TaskDispatchContext } from "../../store/TaskProvider";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TaskDispatchContext);

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="add task"
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added_task",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
}

let nextId = 3;
