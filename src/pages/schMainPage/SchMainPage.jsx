import React from 'react'
import * as S from './SchMainPage.styled'
import { MainHeader } from '@components/MainHeader'
import { Board } from '@components/Board'
import { Footer } from '@components/Footer'
import attendance from '@assets/icons/attendance.svg'
import notice from '@assets/icons/notice.svg'
import community from '@assets/icons/community.svg'


export const SchMainPage = () => {
  
  // 예시 데이터
  const posts1 = [
    { time: "6", user: "익명", content: "내용입니다내용입니다" },
    { time: "7", user: "익명2", content: "내용입니다2" },
    { time: "7", user: "익명2", content: "내용입니다2" },
  ];

  const posts2 = [
    { time: "7", user: "익명2", content: "내용입니다2" },
    { time: "8", user: "익명3", content: "내용입니다3" },
    { time: "9", user: "익명3", content: "내용입니다4" },
  ];

  return (
    <S.Wrapper>
        <MainHeader title="멋사대학교"/>
        <S.Buttons>
          <S.Button>
            <img src={ attendance } alt="attendance" />
            <S.Title>출석</S.Title>
          </S.Button>
          <S.Button>
            <img src={ notice } alt="notice" />
            <S.Title>공지사항</S.Title>
          </S.Button>
          <S.Button>
            <img src={ community } alt="community" />
            <S.Title>커뮤니티</S.Title>
          </S.Button>
        </S.Buttons>
        <S.Boards>
          <Board title="전체게시판" posts={posts1}/>
          <Board title="질문게시판" posts={posts2} />          
        </S.Boards>
        <Footer/>
    </S.Wrapper>
  )
}

export default SchMainPage
