import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("Pesho");

  useEffect(() => {
    setTimeout(() => {
      setUsername("Gosho");
    }, 3000);
  }, []);

  const onUsernameChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmitClick = (e) => {
    e.preventDefault();
    console.log(
      e.target.parentNode.parentNode.getElementById("username").value
    );
  };

  return (
    <div className="App">
      <header>
        <form>
          <div>
            <label htmlFor="username">Username </label>
            <input
              type="text"
              name="username"
              id="username"
              defaultValue={username}
              onChange={onUsernameChange}
            />
          </div>
          <div>
            <input type="submit" value="Log in" onClick={onSubmitClick} />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
