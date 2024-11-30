// 이벤트/공지 게시판
import React, { useState, useEffect } from "react";
import * as S from "./BoardPage.styled";
import { Header } from "@components/Header";
import { Board as SchBoard } from "@components/schBoard/Board";
import { Link } from "react-router-dom";
import axiosInstance from "@apis/axiosInstance";

export const NotiBoardPage = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axiosInstance.get("/post/mainnoticeboard");
      console.log("API response:", response.data);
      setPosts(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <S.Wrapper>
      <Header title="이벤트/공지게시판" />
      <S.Content>
        {posts
          .filter((post) => post.board_title === "이벤트/공지게시판")
          .map((post, index) => (
            <Link to={`/notiPostPage/${post.id}`} style={{ width: "100%" }}>
              <S.Back>
                <SchBoard
                  id={index}
                  title={post.title}
                  body={post.body}
                  time={post.time}
                  anonymous={post.anonymous}
                  writer={post.writer.nickname}
                  comments_count={post.comments_count}
                  likes_count={post.likes_count}
                  images={post.images}
                />
              </S.Back>
            </Link>
          ))}
      </S.Content>
      {/* <Link to='/notiPostingPage'>
                <WriteBtn />
            </Link> */}
    </S.Wrapper>
  );
};

export default NotiBoardPage;
