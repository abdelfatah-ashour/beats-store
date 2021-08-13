import axios from "axios";
import {API} from "../utilities/Keys.json";
export default axios.create({
  baseURL: `${API}/api/v1`,
  withCredentials: true,
});
