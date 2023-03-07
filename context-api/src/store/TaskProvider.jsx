import { createContext, useContext, useReducer, useMemo } from "react";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  // const searchTasks = useMemo(() => {
  //   tasks.filter((t) =>
  //     t.text.toLowerCase().includes(action.text.toLowerCase())
  //   );
  // }, [tasks]);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}

export function useTasksDispatch() {
  return useContext(TaskDispatchContext);
}

export function taskReducer(tasks, action) {
  switch (action.type) {
    case "added_task": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed_task": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted_task": {
      return tasks.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export const initialTasks = [
  { id: 0, text: "Get food", done: false },
  { id: 1, text: "Clean house", done: false },
  { id: 2, text: "Wash dishes", done: false },
];
