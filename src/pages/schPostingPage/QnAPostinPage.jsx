import * as S from "../mainPostingPage/PostingPage.styled";
import styled from "styled-components";
import { Header } from "@components/Header";
import { PostingBox } from "@components/post/PostingBox";
import { PostingBtn } from "@components/post/PostingBtn";
import { Dropdown } from "@components/adminAtt/Dropdown";
import axiosInstance from "@apis/axiosInstance";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const filterData = {
  data: ["트랙선택", "공통", "프론트엔드", "백엔드", "기획/디자인"],
};

export const QnAPostingPage = () => {
  useFetchCsrfToken();

  const boardTitle = "전체게시판";
  const { goTo } = useCustomNavigate();
  const location = useLocation();
  const [track, setTrack] = useState(''); // 기본적으로 빈 값으로 설정

  // 트랙 선택 함수 (Dropdown 컴포넌트의 onChange 처리)
  const clickTrack = (clickedTrack) => {
    if (clickedTrack !== "트랙선택") {
      setTrack(clickedTrack); // "트랙선택"이 아닌 값만 설정
    } else {
      setTrack(''); // "트랙선택"이 선택된 경우에는 빈 값으로 설정
    }
  };

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

    if (!track) {
      alert("트랙을 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("board_title", boardTitle);
    formData.append("title", postData.title);
    formData.append("anonymous", postData.anonymous);
    formData.append("body", postData.body);
    formData.append("track", track);

    if (postData.images && postData.images.length > 0) {
      postData.images.forEach((imageObj) => {
        if (imageObj.file) {
          formData.append("images", imageObj.file);
        }
      });
    }

    try {
      if (isEdit) {
        await axiosInstance.put(`/post/questionboard/${id}/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("게시글 수정 성공");
      } else {
        const response = await axiosInstance.post("/post/questionboard/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("POST 성공:", response.data);
      }
      goTo("/schQnaBoard");
    } catch (error) {
      console.error("POST 실패:", error);
      alert("게시글 작성/수정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <S.Wrapper>
      <Header title="질문게시판" />
      <S.ContentWrapper>
        <S.ContentWrap>
          <Track>
            <Dropdown 
              props={filterData} 
              onChange={clickTrack}
            />
          </Track>
          <PostingBox post={post} setPost={setPost} onSubmit={handlePostSubmit} />
        </S.ContentWrap>
        <PostingBtn />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export const Track = styled.div`
  margin-bottom: 10px;
`;
