import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

const axiosIntance = axios.create({
  baseURL: URL,
});

export default axiosIntance;
