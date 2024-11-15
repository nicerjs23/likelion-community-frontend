// 내가 쓴 글 페이지에 들어갈 게시글

import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;
  background-color: #fff;
  width: 100%;
`;

export const BoardTitle = styled.div`
  color: #0074da;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.PretendardSemiBold["font-family"]};
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    margin: 2px 0;
  }
`;

export const PostTitle = styled.div`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.PretendardSemiBold["font-family"]};
`;

export const Content = styled.div`
  display: flex;

  justify-content: space-between;
`;

export const Context = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PostImg = styled.img`
  max-width: 75px;
  object-fit: cover;
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const PostIcon = styled.img`
  width: 15px;
  height: 15px;
  font-size: 10px;
`;

export const CommentCount = styled.div`
  color: #ff7710;
  margin-right: 2px;
`;
