import React, { useCallback } from "react";
import { useState } from "react";
import Content from "./Content";

//useCallback se chua 1 ham duoc khoi tao tai component cha, sau do se truyen nhu props sang cho component con va cach no hoat dong gan giong nhu useEffect, tuc la co dependencies.


const _useCallback = () => {
  const [count, setCount] = useState<number>(0);
  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <Content onCount={handleCount}/>
      <h1>{count}</h1>
    </div>
  );
};

export default _useCallback;
