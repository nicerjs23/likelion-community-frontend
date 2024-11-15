// 내가 쓴 글 페이지

import React, { useState, useEffect } from "react";
import * as S from "./MyPostPage.styled";
import { Header } from "@components/Header";
import { MyPagePost } from "@components/myPage/MyPagePost";
import { MyPostData } from "../../constant/myPage/myPostData";
import axiosInstance from "@apis/axiosInstance";

export const MyPostPage = () => {
  const [MyPostData, setMyPostDate] = useState([]);

  const getMyPostData = async () => {
    try {
      const response = await axiosInstance.get("/mypage/myposts/");
      console.log("post Response", response.data);

      // mainscrap 배열만 상태로 설정
      if (Array.isArray(response.data.mainscrap)) {
        setMyPostDate(response.data.mainscrap);
      } else {
        console.error("mainscrap 데이터가 배열이 아닙니다.");
      }
    } catch (error) {
      console.log("error", error);
      alert("게시물을 불러오는 중 문제가 발생했습니다.");
    }
  };

  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <S.Wrapper>
      <Header title="내가 쓴 글" />
      <S.Posts>
        {MyPostData.map((post, index) => (
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
        ))}
      </S.Posts>
    </S.Wrapper>
  );
};

export default MyPostPage;
