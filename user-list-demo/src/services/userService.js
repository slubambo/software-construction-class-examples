import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers() {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function addUser(user) {
  const response = await axios.post(API_URL, user);
  return response.data;
}

export async function deleteUser(id) {
  return axios.delete(`${API_URL}/${id}`);
}
