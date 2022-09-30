import React, { useEffect } from "react";
import { useState } from "react";
interface IUser {
  id: number;
  name: string;
}

const users: IUser[] = [
  {
    id: 1,
    name: "Do",
  },
  {
    id: 2,
    name: "Viet",
  },
  {
    id: 3,
    name: "Hung",
  },
];
const _useEffect_2 = () => {
  const [userId, setUserId] = useState<number>(1);

  useEffect(() => {
    const handleMessage = (e: any) => {
      console.log(e.detail);
    };

    window.addEventListener(`user-${userId}`, handleMessage);
    return () => {
      window.removeEventListener(`user-${userId}`, handleMessage);
    };
  }, [userId]);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            style={{ color: userId === user.id ? "red" : "#333" }}
            onClick={() => setUserId(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default _useEffect_2;
