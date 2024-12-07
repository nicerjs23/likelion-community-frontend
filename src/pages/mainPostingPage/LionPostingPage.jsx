// 아기사자 게시판 글 작성 페이지

import * as S from "./PostingPage.styled";
import { Header } from "@components/Header";
import { PostingBox } from "@components/post/PostingBox";
import axiosInstance from "@apis/axiosInstance";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const LionPostingPage = () => {
  useFetchCsrfToken();
  
  const boardTitle = "아기사자게시판";
  const { goTo } = useCustomNavigate();
  const location = useLocation();

  // 수정인지 확인
  const isEdit = Boolean(location.state?.id);
  const { id, title: initialTitle, body: initialBody, images: initialImages, anonymous: initialAnonymous } =
    location.state || {};

  const [post, setPost] = useState({
    title: initialTitle || "",
    body: initialBody || "",
    anonymous: initialAnonymous || false,
    images: initialImages || [],
  });

  const handlePostSubmit = async (postData) => {
    if (!postData.title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!postData.body.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("board_title", boardTitle);
    formData.append("title", postData.title);
    formData.append("anonymous", postData.anonymous);
    formData.append("body", postData.body);

    if (postData.images && postData.images.length > 0) {
      postData.images.forEach((imageObj) => {
        if (imageObj.file) {
          formData.append("images", imageObj.file);
        }
      });
    }

    try {
      if (isEdit) {
        await axiosInstance.put(`/post/mainboard/${id}/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("게시글 수정 성공");
      } else {
        const response = await axiosInstance.post("/post/mainboard/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("POST 성공:", response.data);
      }
      goTo("/lionBoard");
    } catch (error) {
      console.error("POST 실패:", error);
      alert("게시글 작성/수정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <S.Wrapper>
      <Header title="아기사자게시판" />
      <S.ContentWrapper>
        <S.ContentWrap>
          <PostingBox post={post} setPost={setPost} onSubmit={handlePostSubmit} />
        </S.ContentWrap>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
