import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("Pesho");
  const [age, setAge] = useState(0);
  const [creditCard, setCreditCard] = useState("");
  const [occupation, setOccupation] = useState("engineering");
  const [gender, setGender] = useState("male");
  const [bio, setBio] = useState("");
  const [hobbies, setHobbies] = useState({
    hiking: false,
    reading: false,
    sports: false,
    coding: false,
  });

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

  const onBioChange = (e) => {
    setBio(e.target.value);
  };

  const onOccupationSelect = (e) => {
    setOccupation(e.target.value);
  };

  const onGenderChange = (e) => {
    setGender(e.target.value);
  };

  const onHobbiesChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);

    setHobbies((prevHobbies) => ({
      ...prevHobbies,
      [e.target.value]: e.target.checked,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
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
              value={occupation}
              onChange={onOccupationSelect}
            >
              <option value="it">IT</option>
              <option value="engineering">Engineering</option>
              <option value="professor">Professor</option>
              <option value="programmer">Programmer</option>
            </select>
          </div>

          <div>
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={onGenderChange}
              checked={gender === "male"}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={onGenderChange}
              checked={gender === "female"}
            />
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="10"
              value={bio}
              onChange={onBioChange}
            ></textarea>
          </div>

          <div>
            <label htmlFor="hiking">Hiking</label>
            <input
              type="checkbox"
              name="hobbies"
              id="hiking"
              value="hiking"
              checked={hobbies["hiking"]}
              onChange={onHobbiesChange}
            />
            <label htmlFor="reading">Reading</label>
            <input
              type="checkbox"
              name="hobbies"
              id="reading"
              value="reading"
              checked={hobbies["reading"]}
              onChange={onHobbiesChange}
            />
            <label htmlFor="sports">Sports</label>
            <input
              type="checkbox"
              name="hobbies"
              id="sports"
              value="sports"
              checked={hobbies["sports"]}
              onChange={onHobbiesChange}
            />
            <label htmlFor="coding">Coding</label>
            <input
              type="checkbox"
              name="hobbies"
              id="coding"
              value="coding"
              checked={hobbies["coding"]}
              onChange={onHobbiesChange}
            />
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
