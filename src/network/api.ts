import axios from "axios";

let baseUrl;

process.env.NODE_ENV === "development"
  ? (baseUrl = "http://localhost:3500")
  : (baseUrl = "http://beatstashserver.onrender.com");

export default axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
