import axios from "axios";

export default axios.create({
  baseURL: `${process.env.API}/api/v1`,
  withCredentials: true,
});
