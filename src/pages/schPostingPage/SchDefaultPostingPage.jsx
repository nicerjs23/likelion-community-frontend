// 전체 게시판 글 작성 페이지

import * as S from "../mainPostingPage/PostingPage.styled";
import { Header } from "@components/Header";
import { PostingBox } from "@components/post/PostingBox";
import { PostingBtn } from "@components/post/PostingBtn";

export const SchDefaultPostingPage = () => {
  return (
    <S.Wrapper>
      <Header title="전체 게시판" />
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
