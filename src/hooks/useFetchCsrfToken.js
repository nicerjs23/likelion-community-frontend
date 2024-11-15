// src/hooks/useFetchCsrfToken.js
//api연결할때 csrf오류를 막기위한 커스텀훅
import { useEffect } from "react";
import axiosInstance from "@apis/axiosInstance";

const useFetchCsrfToken = () => {
  useEffect(() => {
    const getCsrfToken = async () => {
      try {
        const response = await axiosInstance.get(
          "/signup/get-csrf-token/",
          {
            withCredentials: true,
          }
        );
        const csrfToken = response.data.csrfToken;
        console.log("CSRF Token:", csrfToken);
        axiosInstance.defaults.headers.common["X-CSRFToken"] =
          csrfToken;
      } catch (e) {
        console.error("CSRF 토큰 설정 오류:", e);
      }
    };
    getCsrfToken();
  }, []);
};

export default useFetchCsrfToken;
