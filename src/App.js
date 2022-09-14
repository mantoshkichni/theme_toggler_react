import { useState } from "react";
import ReactSwitch from "react-switch";
import "./styles.css";

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <div className="App" id={theme}>
      <h1>Hello CodeSandbox</h1>
      <div>
        <form>
          <label>Name</label>
          <input></input>
          <label>Password</label>
          <input></input>
          <button>Login</button>
        </form>
      </div>
      <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
      <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
    </div>
  );
}
