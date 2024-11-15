// 벡엔드 게시판 글 상세 페이지

import * as S from "./PostPage.styled";
import { Header } from "@components/Header";
import { Content } from "@components/post/Content";
import { Comments } from "@components/post/Comments";
import { Input } from "@components/post/Input";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "@apis/axiosInstance";

export const BePostPage = () => {

  const { id } = useParams();
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    try {
      const response = await axiosInstance.get(`/post/mainboard/${id}`);
      console.log('response success:', response.data);
      setPost(response.data);
    } catch(error) {
      console.log("error:",error);
    }
  }

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  },[id])

  if (!post) { // 로딩 중인 경우
    return ;
  }

  return (
    <S.Wrapper>
      <Header title="백엔드 게시판" />
      <Content 
        id={post.id}
        title={post.title}
        body={post.body}
        images={post.images}
        likes_count={post.likes_count}
        scraps_count={post.scraps_count}
        time={post.time}
        writer={post.writer.name}
        anonymous={post.anonymous}
        username={post.writer.username}
      />
      <S.CommentWrap>
        <S.CommentTitle>댓글(2)</S.CommentTitle>
        <Comments />
        <Comments />
      </S.CommentWrap>
      <Input />
    </S.Wrapper>
  );
};
