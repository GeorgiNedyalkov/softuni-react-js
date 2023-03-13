import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const ref = useRef();
  const [hobbies, setHobbies] = useState({});
  const [values, setValues] = useState({
    username: "Gosho",
    age: "",
    creditCard: "",
    occupation: "engineering",
    gender: "male",
    bio: "",
  });

  useEffect(() => {
    ref.current.value = values.username;
  }, [values.username]);

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onHobbiesChange = (e) => {
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
              value={values.username}
              onChange={onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="username">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={values.age}
              onChange={onChangeHandler}
            />
          </div>

          {Number(values.age) >= 18 && (
            <div>
              <label htmlFor="credit-card">Credit Card</label>
              <input
                type="text"
                name="credit-card"
                id="credit-card"
                value={values.creditCard ?? ""}
                onChange={onChangeHandler}
              />
            </div>
          )}

          <div>
            <label htmlFor="occupation">Occupation</label>
            <select
              name="occupation"
              id="occupation"
              value={values.occupation}
              onChange={onChangeHandler}
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
              onChange={onChangeHandler}
              checked={values.gender === "male"}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={onChangeHandler}
              checked={values.gender === "female"}
            />
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="10"
              value={values.bio}
              onChange={onChangeHandler}
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
            <label htmlFor="uncontrolled">Uncontrolled</label>
            <input
              type="text"
              name="uncontrolled"
              id="uncontrolled"
              ref={ref}
            />
          </div>

          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
