import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
});

export default http;
