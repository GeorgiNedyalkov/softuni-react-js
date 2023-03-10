import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("Pesho");
  const [age, setAge] = useState(0);
  const [creditCard, setCreditCard] = useState("");
  const [occupation, setOccupation] = useState("engineering");

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

  const onCreditCardChange = (e) => {
    setCreditCard(e.target.value);
  };

  const onOccupationSelect = (e) => {
    setOccupation(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(age);
    console.log(creditCard);
  };

  return (
    <div className="App">
      <header>
        <form onSubmit={onSubmit}>
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
              value={age ?? ""}
              onChange={onAgeChange}
            />
          </div>

          {age > 18 && (
            <div>
              <label htmlFor="credit-card">Credit Card</label>
              <input
                type="text"
                name="credit-card"
                id="credit-card"
                value={creditCard ?? ""}
                onChange={onCreditCardChange}
              />
            </div>
          )}

          <div>
            <label htmlFor="occupation">Occupation</label>
            <select
              name="occupation"
              id="occupation"
              onSelect={onOccupationSelect}
            >
              <option value="it">IT</option>
              <option value="engineering" selected>
                Engineering
              </option>
              <option value="professor">Professor</option>
              <option value="programmer">Programmer</option>
            </select>
          </div>

          <div>
            <input type="submit" value="Log in" />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
