import { useAppDispatch } from "../hooks";

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
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
      <p>{priority}</p>
    </div>
  );
};

export default TaskInfo;
