import React from "react";
import * as S from "./SchMainPage.styled";
import { MainHeader } from "@components/MainHeader";
import { Board } from "@components/Board";
import { Footer } from "@components/Footer";
import attendance from "@assets/icons/attendance.svg";
import notice from "@assets/icons/notice.svg";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import axiosInstance from "@apis/axiosInstance"; // axiosInstance 가져오기
import { useState, useEffect } from "react";
import { Back } from "@components/schBoard/Back";
import useUserVerification from "@hooks/useUserVerification";

export const SchMainPage = () => {
  const verification = useUserVerification();
  console.log("지금 인증 되었나요? : ", verification);
  console.log("같은가요?", verification === "approved");

  const { goTo } = useCustomNavigate();
  const [isStaff, setIsStaff] = useState(false); //운영진유무 상태관리
  // API 호출 및 is_staff 값 가져오기
  useEffect(() => {
    const fetchIsStaff = async () => {
      try {
        const response = await axiosInstance.get("/attendance/main/");
        setIsStaff(response.data.user_info.is_staff);
      } catch (error) {
        console.error("Error fetching is_staff:", error);
      }
    };

    fetchIsStaff();
  }, []);
  console.log("운영진이니?:", isStaff);

  // 예시 데이터
  const posts1 = [
    { time: "6", user: "익명", content: "내용입니다내용입니다" },
    { time: "7", user: "익명2", content: "내용입니다2" },
    { time: "7", user: "익명2", content: "내용입니다2" },
  ];

  const posts2 = [
    { time: "7", user: "익명2", content: "내용입니다2" },
    { time: "8", user: "익명3", content: "내용입니다3" },
    { time: "9", user: "익명3", content: "내용입니다4" },
  ];

  return (
    <S.Wrapper>
      <MainHeader title="멋사대학교" />
      <S.Buttons>
        <S.Button
          onClick={() => goTo(isStaff ? "/adminAtt" : "/lionAtt")}
        >
          <img src={attendance} alt="attendance" />
          <S.Title>출석</S.Title>
        </S.Button>
        <S.Button>
          <img src={notice} alt="notice" />
          <S.Title>공지사항</S.Title>
        </S.Button>
      </S.Buttons>
      <S.Boards>
        <Board
          title="전체게시판"
          posts={posts1}
          link="/schAllBoard"
        />
        <Board
          title="질문게시판"
          posts={posts2}
          link="/schQnaBoard"
        />
      </S.Boards>
      <Footer />
      {verification !== "approved" && <Back />}
    </S.Wrapper>
  );
};

export default SchMainPage;
