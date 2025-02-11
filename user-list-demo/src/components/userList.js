import React, { useState } from "react";
import useUsers from "../hooks/useUsers";

function UserList() {
  const { users, loading, error, handleAddUser, handleDeleteUser } = useUsers();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    handleAddUser({ name, email });
    setName("");
    setEmail("");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <input value={name} placeholder="Name" onChange={e => setName(e.target.value)} />
      <input value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Add User</button>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email}) <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
