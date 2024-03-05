import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3333",
});

axiosClient.interceptors.request.use(
  function (config) {
    const tokenUser = JSON.parse(localStorage.getItem("token"));
    if (tokenUser) {
      config.headers.Authorization = `bearer ${tokenUser?.access_token.trim()}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);


export default axiosClient;