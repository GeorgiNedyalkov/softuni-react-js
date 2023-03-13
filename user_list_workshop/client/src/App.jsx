import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import { UserList } from "./components/UserList";
import * as userService from "./services/UserService";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    userService
      .getAll()
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onUserCreateSubmit = async (e) => {
    // prevent automatic form submit
    e.preventDefault();

    // take data from DOM tree
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    // send ajax request to server
    const createdUser = await userService.create(data);

    // save new user to state
    setUsers((prevUsers) => [...prevUsers, createdUser]);
  };

  const onUserDelete = async (userId) => {
    // remove user from server
    await userService.remove(userId);

    // remove user from stat
    setUsers((state) => state.filter((user) => user._id !== userId));
  };

  const onUserUpdateSubmit = async (e, userId) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const updatedUser = await userService.update(userId, data);

    setUsers((prevUsers) =>
      prevUsers.map((user) => (userId === user._id ? updatedUser : user))
    );
  };

  const formChangeHandler = (e) => {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const validateForm = (e) => {
    const value = e.target.value;
    const errors = {};

    if (value === "firstName" && (value.length < 3 || value.length > 20)) {
      errors.firstName = "First name should be between 3 and 20 characters";
    }

    if (value === "lastName" && (value.length < 3 || value.length > 20)) {
      errors.lastName = "Last name should be between 3 and 20 characters";
    }

    setFormErrors(errors);
  };

  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList
            users={users}
            onUserDelete={onUserDelete}
            onUserCreateSubmit={onUserCreateSubmit}
            onUserUpdateSubmit={onUserUpdateSubmit}
            formValues={formValues}
            formChangeHandler={formChangeHandler}
            formErrors={formErrors}
            validateForm={validateForm}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
