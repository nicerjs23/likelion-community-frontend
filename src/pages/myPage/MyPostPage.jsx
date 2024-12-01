// 내가 쓴 글 페이지

import React, { useState, useEffect } from "react";
import * as S from "./MyPostPage.styled";
import { Header } from "@components/Header";
import { MyPagePost } from "@components/myPage/MyPagePost";
import axiosInstance from "@apis/axiosInstance";
import { Link } from "react-router-dom";

export const MyPostPage = () => {
  const [MyPostData, setMyPostData] = useState([]);

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

  const getMyPostData = async () => {
    try {
      const response = await axiosInstance.get("/mypage/myposts/");
      console.log("API Response Data:", response.data);
  
      const { mainpost = [], schoolpost = [], questionpost = [] } = response.data;
  
      if (!Array.isArray(mainpost) || !Array.isArray(schoolpost) || !Array.isArray(questionpost)) {
        console.error("One of the posts is not an array:", { mainpost, schoolpost, questionpost });
        alert("데이터 형식에 문제가 있습니다.");
        return;
      }
  
      const combinedPosts = [...mainpost, ...schoolpost, ...questionpost];
  
      console.log("Combined Posts:", combinedPosts);
      setMyPostData(combinedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      alert("게시물을 불러오는 중 문제가 발생했습니다.");
    }
  };
  

  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <S.Wrapper>
      <Header title="내가 쓴 글" />
      {/*
      <S.Posts>
        {MyPostData.map((post, index) => (
          <Link
            to={`/defaultPostPage/${post.id}`}
            key={post.id}
            style={{
              width: "100%",
              color: "#323232",
            }}
          >
            <MyPagePost
              id={post.id}
              key={index}
              board_title={post.board_title}
              title={post.title}
              body={post.body}
              images={post.images}
              comments_count={post.comments_count}
              time={post.time}
              anonymous={post.anonymous}
              writer={post.writer?.name}
            />
          </Link>
        ))}
      </S.Posts>
            */}

      <S.Posts>
        {MyPostData.map((post) => {
          const boardPath = boardPaths[post.board_title] || "/qnaPostPage"; // 기본값 설정

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
                id={post.id}
                board_title={post.board_title}
                title={post.title}
                body={post.body}
                images={post.images}
                comments_count={post.comments_count}
                time={post.time}
                anonymous={post.anonymous}
                writer={post.writer?.name}
              />
            </Link>
          );
        })}
      </S.Posts>
    </S.Wrapper>
  );
};

export default MyPostPage;
