import React, { useState } from "react";

//--------------Increase Number---------------------

const course: number[] = [100, 200, 300];
const _useState = () => {
  //dua gia tri tinh toan vao lam gia tri khoi tao thi useState chi lay gia tri tinh toan
  const [counter, setCounter] = useState<number>(() => {
    const total: number = course.reduce((total, curr) => {
      return total + curr;
    });
    console.log(total);
    return total;
  });

  const onSubmit = () => {
    setCounter((prevState) => prevState + 1);
  };

  //--------------Update Info---------------------
  interface Info {
    name?: string;
    age?: number;
    address?: string;
    bio?: string;
  }

  const [info, setInfo] = useState<Partial<Info>>({
    name: "dohung",
    age: 18,
    address: "HN",
  });

  const handleChangeInfo = () => {
    setInfo({
      ...info,
      bio: "helo",
    });
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onSubmit}>Click me!</button>

      <br />
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleChangeInfo}>Click me!</button>
    </div>
  );
};

export default _useState;
