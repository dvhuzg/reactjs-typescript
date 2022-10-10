import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskState } from "../types";
type initalStateType = {
  taskList: TaskState[];
};

const taskList: TaskState[] = [];

const initialState: initalStateType = { taskList };

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<TaskState>) => {
      state.taskList.push(action.payload);
      const jsonTask = JSON.stringify(state.taskList);
      localStorage.setItem("tasks", jsonTask);
    },
  },
});
export const { addNewTask } = taskSlice.actions;
export default taskSlice.reducer;
