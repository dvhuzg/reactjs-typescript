import { Link } from "react-router-dom";
// import { useAppSelector } from "../hooks";
import TaskInfo from "../components/TaskInfo";
import styles from "../styles/ShowTaskList.module.scss";
import classNames from "classnames";
const ShowTaskList = () => {
  // const taskList = useAppSelector((state) => state.task.taskList);
  const storageTasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");

  // console.log(taskList);
  return (
    <div>
      <div>
        <h1>Task List</h1>
        <Link to="/add-new-task">
          <button className={styles.btnSubmit}>Add</button>
        </Link>
      </div>
      <div>
        {storageTasks.map((task: any) => (
          <TaskInfo
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            priority={task.priority}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowTaskList;
