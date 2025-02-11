import { useState, useEffect } from "react";
import { fetchUsers, addUser, deleteUser } from "../services/userService";

export default function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers()
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching users");
        setLoading(false);
      });
  }, []);

  const handleAddUser = async (user) => {
    try {
      const newUser = await addUser(user);
      setUsers([...users, newUser]);
    } catch {
      setError("Error adding user");
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch {
      setError("Error deleting user");
    }
  };

  return { users, loading, error, setUsers, handleAddUser, handleDeleteUser };
}
