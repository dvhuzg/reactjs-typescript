import React, { useRef } from "react";
import { useState } from "react";
//luu gia tri 1 bien o pham vi ben ngoai function component ma khi render lai component no khong bi set lai gia tri ban dau 
const _useRef = () => {
  const [count, setCount] = useState(60);

  const timeId = useRef(99);
  console.log(typeof timeId.current);
  const handleStart = () => {
   timeId.current = window.setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };
  const handleStop = () => {
    window.clearInterval(timeId.current);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default _useRef;
