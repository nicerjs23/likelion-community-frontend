import React from 'react'
import * as S from './MyPage.styled'
import { Header } from '@components/Header'
import myPost from '@assets/icons/myPost.svg'
import myComment from '@assets/icons/myComment.svg'
import myScrap from '@assets/icons/myScrap.svg'



export const MyPage = () => {
    return (
        <S.Wrapper>
            <Header title="마이페이지" />
            <S.Info>
                <S.Left>
                    <S.Top>
                        <S.Title>내 정보</S.Title>
                        <S.Edit>수정</S.Edit>
                    </S.Top>
                    <S.Mid>
                        <S.Name>김멋사</S.Name>
                        <S.Badge>12기</S.Badge>
                        <S.Badge>아기사자</S.Badge>
                    </S.Mid>
                    <S.Bottom>likelion@example.com</S.Bottom>
                </S.Left>
                <S.Img src='' alt="profile img"/>
            </S.Info>
            <S.School>
                <S.SchoolName>내 학교</S.SchoolName>
            </S.School>
            <S.Mypost>
                <S.Post>
                    <S.PostImg src={myPost}/>
                    <S.MypostTitle>내가 쓴 글</S.MypostTitle>
                </S.Post>
                <S.Comment>
                    <S.PostImg src={myComment}/>
                    <S.MypostTitle>댓글 단 글</S.MypostTitle>
                </S.Comment>
                <S.Scrap>
                    <S.PostImg src={myScrap}/>
                    <S.MypostTitle>스크랩</S.MypostTitle>
                </S.Scrap>
            </S.Mypost>
        </S.Wrapper>
    )
}

export default MyPage
