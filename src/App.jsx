import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SignUp } from "./SignUp";
import { UserList } from "./UserList";

function App() {
  const [users, setUsers] = useState([
    {
      id: 101,
      name: "Tigran",
      surname: "A",
      login: "tigran2345@gmail.com",
      password: "tigrann234",
    },
    {
      id: 102,
      name: "Arman",
      surname: "B",
      login: "armann445@gmail.com",
      password: "arm3434",
    },
    {
      id: 103,
      name: "Anna",
      surname: "A",
      login: "ann0023@outlook.com",
      password: "ann0023ann",
    },
    {
      id: 104,
      name: "Lusine",
      surname: "DD",
      login: "lusinlusin@gmail.com",
      password: "luslus5666",
    },
  ]);
  const handleAdd = (obj) => {
    setUsers([...users, { ...obj, id: Date.now() }]);
  };

  return (
    <>
      <UserList users={users} />
      <SignUp onAdd={handleAdd} />
    </>
  );
}

export default App;
