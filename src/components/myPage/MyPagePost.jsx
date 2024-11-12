// 내가 쓴 글 페이지에 들어갈 게시글
import React from 'react'
import * as S from './MyPagePost.styled'
import myComment from '@assets/icons/myComment.svg';

export const MyPagePost = ({board_title,title,content,image_url,comments_count,time,writer}) => {
    return (
        <S.Wrapper>
            <S.BoardTitle>#{board_title}</S.BoardTitle>
            <S.PostTitle>{title}</S.PostTitle>
            <S.Content>
                <S.Context>
                    {content}
                </S.Context>
                <S.PostImg src={image_url}/>
            </S.Content>
            <S.PostInfo>
                <S.PostIcon src={myComment}/>
                <S.CommentCount>{comments_count}</S.CommentCount>
                | {time}분 전 | {writer}
            </S.PostInfo>
        </S.Wrapper>
    )
}

export default MyPagePost
