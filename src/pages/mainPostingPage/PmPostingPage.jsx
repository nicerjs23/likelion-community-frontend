// 기획/디자인 게시판 글 작성 페이지

import * as S from "./PostingPage.styled";
import { Header } from "@components/Header";
import { PostingBox } from "@components/post/PostingBox";
import axiosInstance from "@apis/axiosInstance";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

export const PmPostingPage = () => {
  useFetchCsrfToken();
  
  const boardTitle = "기획/디자인 게시판";
  const { goTo } = useCustomNavigate();

  const handlePostSubmit = async(postData) => {
    const formData = new FormData();
    formData.append("board_title", boardTitle);
    formData.append("title", postData.title);
    formData.append("anonymous", postData.anonymous);
    formData.append("body", postData.body);
    if (postData.images && postData.images.length > 0) {
      postData.images.forEach((imageObj) => {
        formData.append("images", imageObj.file);
      });
    }
    
    try {
      const response = await axiosInstance.post(
        "/post/mainboard/", 
        formData);
      console.log("POST 성공:", response.data);
      goTo('/pmBoard')
    } catch (error) {
      console.error("POST 실패:", error);
    }
  }

  return (
    <S.Wrapper>
      <Header title="기획/디자인 게시판" />
      <S.ContentWrapper>
        <S.ContentWrap>
          <PostingBox  onSubmit={handlePostSubmit} />
        </S.ContentWrap>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
