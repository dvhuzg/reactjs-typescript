import { useReducer } from "react";
// don gian hoa viec phai xu ly nhieu cac state phuc tap

//1.init state = 0
//2.action: up(count+1)/down(count-1)
//3.reducer
//4.dispatch

//init state
const initState = 0;

//action
const UP_ACTION = "up";
const DOWN_ACTION = "down";

//reducer

const reducer = (state: number, action: string) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Nope!");
  }
};

const _useReducer = () => {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
};

export default _useReducer;
