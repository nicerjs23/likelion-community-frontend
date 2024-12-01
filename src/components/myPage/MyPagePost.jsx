// 내가 쓴 글 페이지에 들어갈 게시글

import React from "react";
import * as S from "./MyPagePost.styled";
import myComment from "@assets/icons/myComment.svg";

export const MyPagePost = ({ board_title, title, body, images, comments_count, time, writer, anonymous }) => {
  const image = images && images.length > 0 ? `http://everion.store${images[0].image}` : null;

  const getTime = (time) => {
    const date = new Date(time);
    const now = new Date();
    const elapseTime = Math.floor((now - date) / (1000 * 60));

    if (elapseTime < 0) return `0분 전`;
    if (elapseTime < 60) return `${elapseTime}분 전`;
    if (elapseTime < 1440) return `${Math.floor(elapseTime / 60)}시간 전`;
    return `${Math.floor(elapseTime / 1440)}일 전`;
  };

  const elapseTime = getTime(time);

  const user = anonymous ? "익명" : writer;

  return (
    <S.Wrapper>
      <S.BoardTitle>#{
        board_title ==="백엔드" ? "질문게시판"
        : board_title ==="프론트엔드"? "질문게시판" 
        : board_title ==="기획/디자인"? "질문게시판" 
        : board_title ==="공통"? "질문게시판" 
        : board_title}
      </S.BoardTitle>
      <S.Content>
        <S.Left>
          <S.ContentWrap>
            <S.PostTitle>{title}</S.PostTitle>
            <S.Context>{body}</S.Context>
          </S.ContentWrap>
          <S.PostInfo>
            <S.PostIcon src={myComment} />
            <S.CommentCount>{comments_count}</S.CommentCount> | {elapseTime} | {user}
          </S.PostInfo>
        </S.Left>
        {image && <S.PostImg src={image} alt="게시글 이미지" />}
      </S.Content>
    </S.Wrapper>
  );
};

export default MyPagePost;
