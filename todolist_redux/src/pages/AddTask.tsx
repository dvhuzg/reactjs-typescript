import styles from "../styles/AddTask.module.scss";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/index";
import { addNewTask } from "../redux/taskSlice";
import { v4 as uuidv4 } from "uuid";
const AddTask = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(dateTime: Date) {
    return [
      padTo2Digits(dateTime.getDate()),
      padTo2Digits(dateTime.getMonth() + 1),
      dateTime.getFullYear(),
    ].join("/");
  }

  const defaultDate = formatDate(new Date());

  const task = useAppSelector((state) =>
    state.task.taskList.find((task) => task.id === id)
  );
  const [title, setTitle] = useState<string | undefined>(task?.title);

  const [description, setDescription] = useState<string | undefined>(
    task?.description || ""
  );
  const [date, setDate] = useState<string | undefined>(
    task?.date || defaultDate
  );
  const [priority, setPriority] = useState<string | undefined>(
    task?.priority || "Normal"
  );

  const handleOnSubmit = () => {
    if (title) {
      dispatch(
        addNewTask({ title, description, date, priority, id: uuidv4() })
      );
      clearInputs();
      navigate("/");
    } else {
      alert("F**king hand man, insert title or being shot! ");
    }
  };
  const clearInputs = () => {
    setTitle("");
    setDescription("");
    setDate("");
    setPriority("");
  };
  return (
    <div>
      <h1>New Task</h1>

      <button
        className={styles.showListBtn}
        onClick={() => {
          navigate("/");
        }}>
        List
      </button>
      <form action="">
        <input
          required
          value={title}
          type="text"
          className={styles.task}
          name="task"
          id="task"
          placeholder="Add new task..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className={styles.label} htmlFor="desc">
          Description
        </label>
        <br />
        <textarea
          value={description}
          className={styles.desc}
          name="desc"
          id="desc"
          onChange={(e) => setDescription(e.target.value)}></textarea>
        <div className={styles.additionalInfo}>
          <div className={styles.dateContainer}>
            <label className={styles.label} htmlFor="date">
              Due Date
            </label>
            <br />
            <input
              className={styles.date}
              value={date}
              type="date"
              name="date"
              id="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <br />
          <div className={styles.priorityContainer}>
            <label className={styles.label} htmlFor="priority">
              Priority
            </label>
            <br />
            <select
              className={styles.priority}
              name="priority"
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}>
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        <button
          className={styles.btnSubmit}
          type="submit"
          onClick={handleOnSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
