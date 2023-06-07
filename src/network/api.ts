import axios from "axios";

const BASEURL = "http://localost:3500";

export default axios.create({
  baseURL: BASEURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
