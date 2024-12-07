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
  const [schoolName, setSchoolName]=useState("");

  // API 호출 및 is_staff 값 가져오기
  useEffect(() => {
    const fetchIsStaff = async () => {
      try {
        const response = await axiosInstance.get("/attendance/main/");
        setIsStaff(response.data.user_info.is_staff);
        setSchoolName(response.data.user_info.school_name);
      } catch (error) {
        console.error("Error fetching is_staff:", error);
      }
    };

    fetchIsStaff();
  }, []);
  console.log("운영진이니?:", isStaff);

  // 전체 게시판 최근글 3개
  const [defaultPosts, setDefaultPosts] = useState([]);

  const fetchDefaultPosts = async () => {
    try{
        const response = await axiosInstance.get('/post/latest-school-board/');
        console.log('전체 게시판 최근글 3개 :', response.data);
        setDefaultPosts(Array.isArray(response.data) ? response.data : [response.data]);
    } catch(error) {
        console.log('error:',error)
    }
  }

  useEffect(() => {
    fetchDefaultPosts();
  }, [])

  // 질문 게시판 최근글 3개
  const [qnaPosts, setqnaPosts] = useState([]);

  const fetchQnaPosts = async () => {
    try{
        const response = await axiosInstance.get('/post/latest-question-board/');
        console.log('질문 게시판 최근글 3개 :', response.data);
        setqnaPosts(Array.isArray(response.data) ? response.data : [response.data]);
    } catch(error) {
        console.log('error:',error)
    }
  }

  useEffect(() => {
    fetchQnaPosts();
  }, [])


  return (
    <S.Wrapper>
      <MainHeader title={schoolName} />
      <S.Buttons>
        <S.Button
          onClick={() => goTo(isStaff ? "/adminAtt" : "/lionAtt")}
        >
          <img src={attendance} alt="attendance" />
          <S.Title>출석</S.Title>
        </S.Button>
        <S.Button onClick={() => goTo('/schNotiBoard')}>
          <img src={notice} alt="notice" />
          <S.Title>공지사항</S.Title>
        </S.Button>
      </S.Buttons>
      <S.Boards>
        <Board
          title="전체게시판"
          posts={defaultPosts}
          link="/schAllBoard"
        />
        <Board
          title="질문게시판"
          posts={qnaPosts}
          link="/schQnaBoard"
        />
      </S.Boards>
      <Footer />
      {verification !== "approved" && <Back />}
    </S.Wrapper>
  );
};

export default SchMainPage;
