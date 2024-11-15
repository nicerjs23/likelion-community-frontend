// 이벤트/공지 게시판 글 작성 페이지

import * as S from "./PostingPage.styled";
import { Header } from "@components/Header";
import { PostingBox } from "@components/post/PostingBox";
import axiosInstance from "@apis/axiosInstance";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

export const NotiPostingPage = () => {
  return (
    <S.Wrapper>
      <Header title="이벤트/공지 게시판" />
      <S.ContentWrapper>
        <S.ContentWrap>
          <PostingBox />
        </S.ContentWrap>
        <S.Button>
          <PostingBtn />
        </S.Button>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
