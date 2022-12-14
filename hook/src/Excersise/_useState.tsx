// doc code tu tren xuong, ban dau useState se lay gia tri khoi tao render ra giao dien, code chay den ham setState nhung chi khoi tao ham chu chua lam gi, khi chay xuong duoi, khi onclick goi ham setState thi luc nay ham setState moi thuc thi, set du lieu moi cho state va render lai giao dien.

import React, { useState } from "react";

//--------------Increase Number---------------------

const course: number[] = [100, 200, 300];
const _useState = () => {
  //dua gia tri tinh toan vao lam gia tri khoi tao thi useState chi lay gia tri tinh toan
  const [counter, setCounter] = useState<number>(() => {
    const total: number = course.reduce((total, curr) => {
      return total + curr;
    });
    // console.log(total);
    return total;
  });

  const onSubmit = () => {
    setCounter((prevState) => prevState + 1);
  };

  //--------------Update Info---------------------
  interface Info {
    [name:string]:string|number;
  }

  const [info, setInfo] = useState<Partial<Info>>({
    name: "dohung",
    age: 18,
    address: "HN",
  });

  const handleChangeInfo = (): void => {
    setInfo({
      ...info,
      bio: "helo",
    });
  };
  //--------------Gift---------------------

  const giftList: string[] = ["iPhone 14 Pro Max", "Huracan", "Nokia 1280"];
  const [gift, setGift] = useState("");

  const handleGift = (): void => {
    const index = Math.floor(Math.random() * giftList.length);
    setGift(giftList[index]);
  };

  //--------------Get Value Form---------------------

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const submitForm = (): void => {
    console.log(name, email);
  };
  //--------------Radio Button---------------------
  interface implCourse {
    id: number;
    name: string;
  }

  const Course_radio: implCourse[] = [
    {
      id: 1,
      name: "HTML CSS",
    },
    {
      id: 2,
      name: "TS",
    },
    {
      id: 3,
      name: "ReactJS",
    },
  ];

  const [checked, setChecked] = useState<number>();
  const handleRadio = (): void => {
    console.log(checked);
  };

  //--------------Checkbox Button---------------------

  const [checkbox, setCheckbox] = useState<number[]>([]);
  console.log(checkbox);
  const handleCheckbox = (id: number) => {
    setCheckbox((prev) => {
      const isCheck = checkbox.includes(id);
      if (isCheck) {
        return checkbox.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  //--------------Todo List---------------------
  // type strJobs = [];
  // const storageJobs= localStorage.getItem('jobs');
  const [job, setJob] = useState<string>("");
  // const [jobs, setJobs] = useState<string[]>(JSON.parse(storageJobs ?? '[]'));
  const [jobs, setJobs] = useState<string[]>(():string[]=>{
    const storageJobs = localStorage.getItem('jobs');

    return JSON.parse(storageJobs ?? '[]');
  })
  const handleJob = (e:React.ChangeEvent<HTMLInputElement>) => {
    setJob(e.target.value);
  };
  const showJobs = ()=>{
    setJobs(()=>{
      const newJobs = [...jobs, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs' , jsonJobs);
      console.log(jsonJobs);
      return newJobs;
    });
    setJob('');
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onSubmit}>Click me!</button>

      <br />

      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleChangeInfo}>Click me!</button>

      <br />

      <h1>{gift || "Chua co phan thuong"}</h1>
      <button onClick={handleGift}>Click me!</button>

      <br />
      <br />

      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <button onClick={submitForm}>Click me!</button>
      <br />
      <br />

      {Course_radio.map((course) => {
        return (
          <div key={course.id}>
            <input
              type="radio"
              checked={checked === course.id} //doan trong nay tra ra true false nhe.
              onChange={() => {
                setChecked(course.id);
              }}
            />
            {course.name}
          </div>
        );
      })}
      <button type="submit" onClick={handleRadio}>
        Submit
      </button>

      <br />
      <br />

      <span>
        {Course_radio.map((course) => {
          return (
            <div key={course.id}>
              <input
                type="checkbox"
                checked={checkbox.includes(course.id)}
                onChange={() => {
                  handleCheckbox(course.id);
                }}
              />
              {course.name}
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </span>
      <br />
      <br />
      <div>
        <input value={job} type="text" onChange={handleJob}/>
        <ul>{jobs.map(job=>{
          return(
            <li>{job}</li>
          )
        })}</ul>
        <button type="submit" onClick={showJobs}>Add</button>
      </div>
    </div>
  );
};

export default _useState;
