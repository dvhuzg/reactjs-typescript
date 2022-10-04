import React from "react";
import { useReducer } from "react";

interface IState {
  [name: string]: string | [];
}

const initState: IState = {
  job: "",
  jobs: [],
};

const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload: any) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const reducer = (state: any, action: any) => {};

const _useReducer_Todo = () => {
  const [state, dispatch] = useReducer<any>(reducer, initState);
  const { job, jobs }: any = state;
  return (
    <div>
      <h3>Todo</h3>
      <input
        type="text"
        value={job}
        placeholder="Enter job..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />

      <button>Add</button>
      <ul>
        {jobs.map((job: string) => (
          <li>{job} &times</li>
        ))}
      </ul>
    </div>
  );
};

export default _useReducer_Todo;
