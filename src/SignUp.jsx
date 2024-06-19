import { useRef, useState } from "react";

export const SignUp = ({ onAdd }) => {
  const name = useRef();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    login: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name.trim()) {
      return setError("Pleace fill your name");
    }
    if (!user.surname.trim()) {
      return setError("Pleace fill your surname");
    }
    if (!user.login == regexp) {
      return setError("Pleace write your email");
    }
    if (user.password.length < 6) {
      return setError("Pleace write longer password");
    }
//     else if(onAdd)  {
// return setSuccess("Success")
//     }

    onAdd(user);
    setUser({ name: "", surname: "", login: "", password: "" });
    setError("");
    setSuccess("");
  };
  return (
    <div>
      <h3>SignUp</h3>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p> || success && <p style={{ color: "green" }}>{success}</p>}
        {/* {success && <p style={{ color: "green" }}>{success}</p>} */}
        <input
          placeholder="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          placeholder="surname"
          value={user.surname}
          onChange={(e) => setUser({ ...user, surname: e.target.value })}
        />
        <input
          placeholder="login"
          value={user.login}
          onChange={(e) => setUser({ ...user, login: e.target.value })}
        />
        <input
          placeholder="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button> Save </button>
      </form>
    </div>
  );
};
