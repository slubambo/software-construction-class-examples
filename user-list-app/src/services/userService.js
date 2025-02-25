import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers() {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function deleteUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 500); // Simulate an API call delay
  });
}
