import axios from "axios";
import axios from "axios";

console.log(
  "AXIOS BASE URL:",
  import.meta.env.VITE_API_URL + "/api"
);

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
  withCredentials: true,
});
export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api",
  withCredentials: true,
});
