// 댓글 쓴 글 페이지

import React, { useState, useEffect } from "react";
import * as S from "./MyPostPage.styled";
import { Header } from "@components/Header";
import { MyPagePost } from "@components/myPage/MyPagePost";
import axiosInstance from "@apis/axiosInstance";
import { Link } from "react-router-dom";

export const MyCommentPage = () => {
  const [MyCommentData, setMyCommentData] = useState([]);

  // 게시글 클릭하면 이동하는 게시판
  const boardPaths = {
    "자유게시판": "/defaultPostPage",
    "프론트엔드 게시판": "/fePostPage",
    "백엔드 게시판": "/bePostPage",
    "기획/디자인 게시판": "/pmPostPage",
    "아기사자게시판": "/lionPostPage",
    "이벤트/공지게시판": "/notiPostPage",
    "참여게시판": "/joinPostPage",
    // 학교
    "전체게시판": "/schDefaultPostPage",
    "질문게시판": "/qnaPostPage",
  };
  const getMyCommentData = async () => {
    try {
      const response = await axiosInstance.get("/mypage/mycomments/");
      console.log("API Response Data:", response.data);
  
      const { maincomment = [], schoolcomment = [], questioncomment = [] } = response.data;
  
      if (!Array.isArray(maincomment) || !Array.isArray(schoolcomment) || !Array.isArray(questioncomment)) {
        console.error("댓글 단 글 전부 불러오기기:", { maincomment, schoolcomment, questioncomment });
        alert("데이터 형식에 문제가 있습니다.");
        return;
      }
  
      const combinedPosts = [...maincomment, ...schoolcomment, ...questioncomment];
  
      console.log("댓글 단 글 전체 합쳐서 불러오기:", combinedPosts);
      setMyCommentData(combinedPosts);
    } catch (error) {
      console.error("댓글 단 글 전체 불러오기 실패:", error);
      alert("게시물을 불러오는 중 문제가 발생했습니다.");
    }
  };

  useEffect(() => {
    getMyCommentData();
  }, []);

  return (
    <S.Wrapper>
      <Header title="댓글 단 글" />
      <S.Posts>
        {MyCommentData.map((comment) => {
          const boardPath = boardPaths[comment.board_title] || "/qnaPostPage"; // 기본값 설정

          return (
            <Link
              to={`${boardPath}/${comment.id}`} // 동적으로 게시판 경로 설정
              key={comment.id}
              style={{
                width: "100%",
                color: "#323232",
              }}
            >
              <MyPagePost
                id={comment.id}
                board_title={comment.board_title}
                title={comment.title}
                body={comment.body}
                images={comment.images}
                comments_count={comment.comments_count}
                time={comment.time}
                anonymous={comment.anonymous}
                writer={comment.writer.nickname}
              />
            </Link>
          );
        })}
      </S.Posts>
    </S.Wrapper>
  );
};

export default MyCommentPage;
