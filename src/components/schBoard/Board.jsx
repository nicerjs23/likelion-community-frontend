// 게시판 목록 페이지에서 사용합니다

import React from "react";
import * as S from "./Board.styled";
import { BoardInfo as BoardInfoComponent } from "./BoardInfo";

export const Board = ({ id, track, title, body, time, anonymous, writer, comments_count, scraps_count, images }) => {
  const image = images && images.length > 0 ? images[0].image : null;

  return (
    <S.Wrapper>
      <S.Left>
        {/* <S.Top> */}
        <S.Title>
          {track && <span>[{track}]</span>} {title}
        </S.Title>
        <S.Context>{body}</S.Context>
        {/* </S.Top> */}
        <BoardInfoComponent time={time} anonymous={anonymous} writer={writer} comments_count={comments_count} likes_count={likes_count} />
      </S.Left>
      {image && <S.RightImg src={image} />}
    </S.Wrapper>
  );
};

export default Board;
