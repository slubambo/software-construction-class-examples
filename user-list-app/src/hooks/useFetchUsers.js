import { useState, useEffect } from "react";
import { fetchUsers } from "../services/userService";

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

  return { users, loading, error, setUsers };
}
