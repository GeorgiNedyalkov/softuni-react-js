import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("Pesho");
  const [age, setAge] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setUsername("Gosho");
    }, 3000);
  }, []);

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onAgeChange = (e) => {
    setAge(e.target.value);
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
              value={username}
              onChange={onUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="username">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={onAgeChange}
            />
          </div>
          <div>
            <input type="submit" value="Log in" />
          </div>
        </form>
        {username}
      </header>
    </div>
  );
}

export default App;
