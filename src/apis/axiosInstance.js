// src/api/axiosInstance.js
import axios from "axios";
import Cookies from "js-cookie";

// axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true, // 쿠키를 포함하여 요청 보내기
});

axiosInstance.interceptors.request.use(
  (config) => {
    const csrftoken = Cookies.get("csrftoken");
    if (csrftoken) {
      config.headers["X-CSRFToken"] = csrftoken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
