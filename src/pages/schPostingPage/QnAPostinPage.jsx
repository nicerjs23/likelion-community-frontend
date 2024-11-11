// 질문 게시판 글 작성 페이지

import * as S from "../mainPostingPage/PostingPage.styled";
import styled from "styled-components";
import { Header } from "@components/Header";
import { PostingBox } from "@components/post/PostingBox";
import { PostingBtn } from "@components/post/PostingBtn";
import { Dropdown } from "@components/adminAtt/Dropdown";

const filterData = {
  data: ["트랙선택", "공통", "프론트엔드", "백엔드", "기획/디자인"],
};

export const QnAPostingPage = () => {
  return (
    <S.Wrapper>
      <Header title="질문 게시판" />
      <S.ContentWrapper>
        <S.ContentWrap>
          <Track>
            <Dropdown props={filterData} />
          </Track>
          <PostingBox />
        </S.ContentWrap>

        <PostingBtn />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export const Track = styled.div`
  margin-bottom: 10px;
`;
