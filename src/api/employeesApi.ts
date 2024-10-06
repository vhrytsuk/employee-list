import axios from "axios";

const API_URL = "http://localhost:3000/";

const employeesAPI = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default employeesAPI;
