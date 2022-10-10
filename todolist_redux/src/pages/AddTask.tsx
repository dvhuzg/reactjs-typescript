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
  const task = useAppSelector((state) =>
    state.task.taskList.find((task) => task.id === id)
  );
  const [title, setTitle] = useState<string | undefined>(task?.title || "");

  const [description, setDescription] = useState<string | undefined>(
    task?.description || ""
  );
  const [date, setDate] = useState<string | undefined>(task?.date || "");
  const [priority, setPriority] = useState<string | undefined>(
    task?.priority || "Normal"
  );

  const handleOnSubmit = () => {
    dispatch(addNewTask({ title, description, date, priority, id: uuidv4() }));
    clearInputs();
    navigate("/");
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
      <form action="">
        <input
          value={title}
          type="text"
          className={styles.task}
          name="task"
          id="task"
          placeholder="Add new task..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="desc">Description</label>
        <br />
        <textarea
          value={description}
          className={styles.desc}
          name="desc"
          id="desc"
          onChange={(e) => setDescription(e.target.value)}></textarea>
        <div>
          <label htmlFor="date">Due Date</label>
          <br />
          <input
            value={date}
            type="date"
            name="date"
            id="date"
            onChange={(e) => setDate(e.target.value)}
          />

          <br />
          <label htmlFor="priority">Priority</label>
          <br />
          <select
            name="priority"
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit" onClick={handleOnSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
