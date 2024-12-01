// 스크랩 페이지

import React from "react";
import * as S from "./MyPostPage.styled";
import { Header } from "@components/Header";
import { MyPagePost } from "@components/myPage/MyPagePost";
import { useState, useEffect } from "react";
import axiosInstance from "@apis/axiosInstance";
import { Link } from "react-router-dom";

export const MyScrapPage = () => {
  const [MyScrappedData, setMyScrappedData] = useState([]);

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


  const getMyScrappedData = async () => {
    try {
      const response = await axiosInstance.get("/mypage/myscraps/");
      console.log("API Response Data:", response.data);
  
      const { mainscrap = [], schoolscrap = [], questionscrap = [] } = response.data;
  
      if (!Array.isArray(mainscrap) || !Array.isArray(schoolscrap) || !Array.isArray(questionscrap)) {
        console.error("스크랩 게시글 전체 데이터: ", { mainscrap, schoolscrap, questionscrap });
        alert("데이터 형식에 문제가 있습니다.");
        return;
      }
  
      const combinedPosts = [...mainscrap, ...schoolscrap, ...questionscrap];
  
      console.log("스크랩 게시글 전체 데이터 합침: ", combinedPosts);
      setMyScrappedData(combinedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      alert("게시물을 불러오는 중 문제가 발생했습니다.");
    }
  };

  useEffect(() => {
    getMyScrappedData();
  }, []);

  return (
    <S.Wrapper>
      <Header title="스크랩" />
      <S.Posts>
        {MyScrappedData.map((post, index) => {
          const boardPath = boardPaths[post.board_title] || "/qnaPostPage";

          return (
            <Link
              to={`${boardPath}/${post.id}`} // 동적으로 게시판 경로 설정
              key={post.id}
              style={{
                width: "100%",
                color: "#323232",
              }}
            >

          <MyPagePost
            id={index}
            board_title={post.board_title}
            title={post.title}
            body={post.body}
            image_url={post.image_url}
            comments_count={post.comments_count}
            time={post.time}
            writer={post.writer?.nickname}
          />
          </Link>
        );
      })}
      </S.Posts>
    </S.Wrapper>
  );
};

export default MyScrapPage;
