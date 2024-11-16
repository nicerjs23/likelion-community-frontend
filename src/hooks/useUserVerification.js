// src/hooks/userVerification.js
import { useState, useEffect } from "react";
import axiosInstance from "@apis/axiosInstance";

const useUserVerification = () => {
  const [verification, setVerification] = useState("none");

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axiosInstance.get("/mypage/");
        console.log("User Response:", response.data);

        if (response.data.user_info) {
          const schoolStatus = response.data.verification_status.school_status;
          console.log("학교 인증 상태:", schoolStatus);
          setVerification(schoolStatus);
        } else {
          console.log("사용자 정보가 존재하지 않습니다.");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    getUserInfo();
  }, []);

  return verification;
};

export default useUserVerification;
