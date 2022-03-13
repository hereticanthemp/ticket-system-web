import axios from "axios";

const baseURL = "https://localhost:7148/api/User/";
const axiosInstance = axios.create({
  baseURL,
});

export default {
  getUsers: () => {
    return axiosInstance.get("/GetUsers");
  },
  suspendUser: (user) => {
    user.suspend = true;
    return axiosInstance.post("/ModifyUser", user);
  },
  reinstateUser: (user) => {
    user.suspend = false;
    return axiosInstance.post("/ModifyUser", user);
  },
  addUser: (user) => {
    return axiosInstance.post("/AddUser", user);
  },
};
