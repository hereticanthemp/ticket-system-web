import axios from "axios";

const baseURL = "https://localhost:7148/api/User/";
const axiosInstance = axios.create({
  baseURL,
});

export default {
  getUsers: () => {
    return axiosInstance.get("/GetUsers")
  },
};
