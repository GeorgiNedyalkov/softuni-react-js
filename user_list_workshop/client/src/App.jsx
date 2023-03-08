import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import { UserList } from "./components/UserList";
import * as userService from "./services/UserService";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

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

    // close the window
  };

  const onUserDelete = async (userId) => {
    // remove user from server
    await userService.remove(userId);

    // remove user from stat
    setUsers((state) => state.filter((user) => user._id !== userId));
  };

  return (
    <>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />
          <UserList
            users={users}
            onUserCreateSubmit={onUserCreateSubmit}
            onUserDelete={onUserDelete}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
