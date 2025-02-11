import React, { useState, useEffect } from "react";
import useFetchUsers from "../hooks/useFetchUsers";
import { deleteUser } from "../services/userService";
import axios from "axios";

function UserList() {

  const { users, loading, error, setUsers } = useFetchUsers();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = () => {
    axios.post("https://jsonplaceholder.typicode.com/users", { name, email })
      .then(response => setUsers([...users, response.data]))
      .catch(error => console.error("Error adding user", error));
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user.id !== userId));
    } catch {
      alert("Error deleting user");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>User List</h2>

      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
