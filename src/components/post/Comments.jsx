// Comments.js
import * as S from "./Content.styled";
import styled from "styled-components";
import profileLion from "@assets/icons/profileLion.svg";
import { ChatStart } from "@components/chat/ChatStart";

export const Comments = ({ comment }) => {
  const { anonymous, content, time, writer, anonymous_number } = comment;

  const name = anonymous
    ? `익명${anonymous_number || ""}` // 익명 번호 추가
    : writer.nickname || "익명";

  // 시간 포맷팅
  const date = new Date(time).toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Comment>
      <S.Writter>
        <S.ProfileImg
          src={!anonymous && writer.profile_image ? writer.profile_image : profileLion}
          alt="profile img"
        />
        <S.Text>
          <ChatStart
            nickname={name}
            username={writer.username}
          />
          <p>{date}</p>
        </S.Text>
      </S.Writter>
      <S.Content>{content}</S.Content>
    </Comment>
  );
};
const Comment = styled.div`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.12));
`;
