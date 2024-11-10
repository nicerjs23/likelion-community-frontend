// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default axiosInstance;

// import * as S from "./MainPage.styled";

// import React, { useEffect } from "react";
// import axiosInstance from "../../apis/axiosInstance";

// export const MainPage = () => {
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axiosInstance.get("/");
//         console.log("User Data:", response.data); // 성공 시 사용자 데이터 출력
//       } catch (error) {
//         if (error.response) {
//           console.log("Error:", error.response.data); // 실패 시 에러 메시지 출력
//         } else {
//           console.log("Error:", error.message);
//         }
//       }
//     };

//     fetchUserData(); // 컴포넌트가 마운트될 때 API 호출
//   }, []);

//   return <S.MainWrapper>4호선톤 메인페이지</S.MainWrapper>;
// };
