// 작성 시간, 작성자 이름, 댓글 수, 추천 수
import styled from "styled-components";
export const BoardInfo = ({ time, writer, anonymous, comments_count, likes_count }) => {
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
    <Wrapper>
      {elapseTime} | {user} | 댓글 {comments_count} | 추천
      <Color>{likes_count}</Color>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  color: #767676;
  font-size: 10px;
`;

const Color = styled.p`
  color: #ff7d2c;
  padding-left: 2px;
`;
