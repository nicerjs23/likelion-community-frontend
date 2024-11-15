// 내가 쓴 글 페이지
import React from "react";
import * as S from "./MyPostPage.styled";
import { Header } from "@components/Header";
import { MyPagePost } from "@components/myPage/MyPagePost";
import { MyPostData } from "../../constant/myPage/myPostData";

export const MyPostPage = () => {
  return (
    <S.Wrapper>
      <Header title="내가 쓴 글" />
      <S.Posts>
        {MyPostData.map((post, index) => (
          <MyPagePost
            key={index}
            board_title={post.board_title}
            title={post.title}
            content={post.content}
            image_url={post.image_url}
            comments_count={post.comments_count}
            time={post.time}
            writer={post.writer}
          />
        ))}
      </S.Posts>
    </S.Wrapper>
  );
};

export default MyPostPage;
