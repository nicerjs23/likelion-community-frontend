// 참여 게시판 글 상세 페이지

import * as S from "./PostPage.styled";
import { Header } from "@components/Header";
import { Content } from "@components/post/Content";
import { Comments } from "@components/post/Comments";
import { Input } from "@components/post/Input";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "@apis/axiosInstance";

export const JoinPostPage = () => {
  const { id } = useParams();
  const postId = Number(id);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);


  // 게시물 가져오기
  const fetchPost = async () => {
    try {
      const response = await axiosInstance.get(`/post/mainboard/${postId}`);
      console.log("response success:", response.data);
      setPost(response.data);
    } catch (error) {
      console.log("error:", error);
      setError("게시물을 불러오는 데 실패했습니다.");
    }
  };

  // 댓글 가져오기
  const fetchComments = async () => {
    try {
      const response = await axiosInstance.get(`/post/maincomment/?board_id=${postId}`);
      console.log("comments response:", response.data);
      const data = response.data.results || response.data;

      const commentsArray = Array.isArray(data)
        ? data.filter(comment => Number(comment.board) === postId)
        : data && Number(data.board) === postId
        ? [data]
        : [];

      setComments(commentsArray);
    } catch (error) {
      console.log("error:", error);
      setError("댓글을 불러오는 데 실패했습니다.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchPost();
      await fetchComments();
    };

    if (postId) {
      fetchData();
    }
  }, [postId]);

  useEffect(() => {
    console.log("Updated comments:", comments);
  }, [comments]);

  // 댓글 추가 함수
  const handleAddComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  if (!post) { // 로딩 중인 경우
    return ;
  }
  
  return (
    <S.Wrapper>
      <Header title="참여게시판" />
      <Content 
        id={post.id}
        title={post.title}
        body={post.body}
        images={post.images}
        likes_count={post.likes_count}
        scraps_count={post.scraps_count}
        time={post.time}
        writer={post.writer.nickname}
        anonymous={post.anonymous}
        username={post.writer.username}
      />
      <S.CommentWrap>
        <S.CommentTitle>댓글({comments.length})</S.CommentTitle>
        {comments.map((comment) => (
          <Comments key={comment.id} comment={comment} />
        ))}
      </S.CommentWrap>
      <Input postId={post.id} onAddComment={handleAddComment} />
    </S.Wrapper>
  );
};
