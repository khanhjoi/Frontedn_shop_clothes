import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const getLocalToken = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token.access_token;
};

const getLocalRefreshToken = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token.refresh_token;
};

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

// Response interceptor for API calls
axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async function (error) {
    const { response, config } = error;
    const status = response?.status;

    // Kiểm tra mã lỗi có phải là 401 hoặc 403 hay không
    if (status === 401 || status === 403) {
      // Chúng ta sẽ Thực hiện kịch bản refresh token tại đây
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
