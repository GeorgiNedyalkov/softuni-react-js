import { useState } from "react";
import Table from "./Table";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import EditUser from "./EditUser";
import AddUser from "./AddUser";
import DeleteUser from "./DeleteUser";
import UserDetails from "./UserDetails";

const Main = () => {
  const [users, setUsers] = useState([]);

  const [isAddingUser, setIsAddingUser] = useState(false);
  const [isEdittingUser, setIsEdittingUser] = useState(false);
  const [isDeletingUser, setIsDeletingUser] = useState(false);
  const [viewDetails, setViewDetails] = useState(false);

  return (
    <main className="main">
      <SearchBar />
      <Table
        setViewDetails={setViewDetails}
        setIsEdittingUser={setIsEdittingUser}
        setIsDeletingUser={setIsDeletingUser}
      />
      <Pagination />

      <button onClick={() => setIsAddingUser(true)} className="btn-add btn">
        Add new user
      </button>

      {isAddingUser && <AddUser setIsAddingUser={setIsAddingUser} />}

      {isEdittingUser && <EditUser setIsEdittingUser={setIsEdittingUser} />}

      {isDeletingUser && <DeleteUser setIsDeletingUser={setIsDeletingUser} />}

      {viewDetails && <UserDetails setViewDetails={setViewDetails} />}
    </main>
  );
};

export default Main;
