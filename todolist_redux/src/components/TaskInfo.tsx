import { useAppDispatch } from "../hooks";
import styles from "../styles/TaskList.module.scss";
const TaskInfo = ({
  id,
  title,
  description,
  date,
  priority,
  ...rest
}: {
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  date: string | undefined;
  priority: string | undefined;
}) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.extraInfo}>
        <p>Description: {description}</p>
        <p>Time: {date}</p>
        <p>Priority: {priority}</p>
      </div>
    </div>
  );
};

export default TaskInfo;
