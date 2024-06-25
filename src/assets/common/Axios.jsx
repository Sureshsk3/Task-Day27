import axios from "axios";

const AxiosService = axios.create({
  baseURL: "https://663711a2288fedf6937f534a.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosService;
