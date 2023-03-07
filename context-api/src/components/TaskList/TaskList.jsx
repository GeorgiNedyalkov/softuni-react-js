import { useState, useContext } from "react";
import { TaskContext, TaskDispatchContext } from "../../store/TaskProvider";

function TaskList() {
  const tasks = useContext(TaskContext);

  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TaskDispatchContext);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed_task",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
          type="text"
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <div className="task">
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            dispatch({
              type: "changed_task",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }}
        />
        {taskContent}
        <button
          onClick={() => {
            dispatch({
              type: "deleted_task",
              id: task.id,
            });
          }}
        >
          Delete
        </button>
      </label>
    </div>
  );
}
