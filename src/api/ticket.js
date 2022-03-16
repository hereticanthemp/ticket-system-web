import axios from "axios";

const baseURL = "https://localhost:7148/api/Ticket/";
const axiosInstance = axios.create({
  baseURL,
});

export default {
  getTickets: (param) => {
    return axiosInstance.post("/GetTickets", param ?? {});
  },
};
