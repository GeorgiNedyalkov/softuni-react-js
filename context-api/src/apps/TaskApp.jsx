import TaskList from "../components/TaskList/TaskList";
import AddTask from "../components/AddTask/AddTask";
import TaskProvider from "../store/TaskProvider";

function TaskApp() {
  return (
    <TaskProvider>
      <h1>Extracting State Logic into a Reducer</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
}

export default TaskApp;
