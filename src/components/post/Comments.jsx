// 댓글
import * as S from "./Content.styled";
import styled from "styled-components";
import profileLion from "@assets/icons/profileLion.svg";

export const Comments = () => {
  return (
    <Comment>
      <S.Writter>
        <S.ProfileImg src={profileLion}></S.ProfileImg>
        <S.Text>
          <p>별명</p>
          <p>10/28 14:26</p>
        </S.Text>
      </S.Writter>
      <S.Content>저요! 제가 하겠습니다!!</S.Content>
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
