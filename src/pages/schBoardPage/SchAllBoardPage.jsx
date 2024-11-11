import React from 'react';
import * as S from './SchAllBoardPage.styled'
import { Header } from '@components/Header'
import { Board as SchBoard } from '@components/schBoard/Board'
import { WriteBtn } from '@components/schBoard/WriteBtn'
import { Link } from 'react-router-dom';

export const SchAllBoardPage = () => {

    const Board= [
        {
            title: '🌍지구🌍를 사랑하고 보호하고 싶다... ',
            context: '지구를 사랑하고 보호하고 싶다면, 우리 팀 지구를 구해라 팀으로 오시는걸 추천 드립니다람쥐...'
        },
        {
            title: '🌍지구🌍를 사랑하고 보호하고 싶다... 🌍지구🌍를 사랑하고 보호하고 싶다... ',
            context: '지구를 사랑하고 보호하고 싶다면, 우리 팀으로 와'
        }
    ]

    return (
        <S.Wrapper>
            <Header title='전체 게시판' />
            <S.Noti>📢  중앙해커톤 12/6일 개최! </S.Noti>
            <S.Content>
                <SchBoard 
                    title={Board[1].title}
                    context={Board[1].context}
                />
                <SchBoard 
                    title={Board[0].title}
                    context={Board[0].context}
                />
                <SchBoard 
                    title={Board[0].title}
                    context={Board[0].context}
                />
                <SchBoard 
                    title={Board[0].title}
                    context={Board[0].context}
                />
                <SchBoard 
                    title={Board[0].title}
                    context={Board[0].context}
                />
                <SchBoard 
                    title={Board[0].title}
                    context={Board[0].context}
                />
                <SchBoard 
                    title={Board[0].title}
                    context={Board[0].context}
                />
                <SchBoard 
                    title={Board[0].title}
                    context={Board[0].context}
                />
                <SchBoard 
                    title={Board[0].title}
                    context={Board[0].context}
                />
                <SchBoard 
                    title={Board[0].title}
                    context={Board[0].context}
                />
                <SchBoard 
                    title={Board[0].title}
                    context={Board[0].context}
                />
            </S.Content>
            <Link to='/'>
                <WriteBtn />
            </Link>
        </S.Wrapper>
    )
}

export default SchAllBoardPage
