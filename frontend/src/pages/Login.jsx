import axios from "axios";
import { API_URL } from "../config";

const login = async (email, password) => {
  const { data } = await axios.post(`${API_URL}/auth/login`, { email, password });
  console.log(data);
};
export default login;