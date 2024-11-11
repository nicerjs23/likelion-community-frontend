// 백엔드 게시판
import React from 'react'
import * as S from './BoardPage.styled'
import { Header } from '@components/Header'
import { Board as SchBoard } from '@components/schBoard/Board'
import { WriteBtn } from '@components/schBoard/WriteBtn'
import { Link } from 'react-router-dom'

export const BeBoardPage = () => {

    const Board= [
        {
            title: '🌍지구🌍를 사랑하고 보호하고 싶다... ',
            context: '짧은 글',
        },
        {
            title: '짧은 제목',
            context: '지구를 사랑하고 보호하고 싶다면, 우리 팀 지구를 구해라 팀으로 오시는걸 추천 드립니다람쥐...',
        },
        {
            title: '🌍지구🌍를 사랑하고 보호하고 싶다... ',
            context: '지구를 사랑하고 보호하고 싶다면, 우리 팀 지구를 구해라 팀으로 오시는걸 추천 드립니다람쥐...',
        },
        {
            title: '🌍지구🌍를 사랑하고 보호하고 싶다... ',
            context: '지구를 사랑하고 보호하고 싶다면, 우리 팀 지구를 구해라 팀으로 오시는걸 추천 드립니다람쥐...',
        },
        {
            title: '🌍지구🌍를 사랑하고 보호하고 싶다... ',
            context: '지구를 사랑하고 보호하고 싶다면, 우리 팀 지구를 구해라 팀으로 오시는걸 추천 드립니다람쥐...',
        },
        {
            title: '🌍지구🌍를 사랑하고 보호하고 싶다... ',
            context: '지구를 사랑하고 보호하고 싶다면, 우리 팀 지구를 구해라 팀으로 오시는걸 추천 드립니다람쥐...',
        }
    ]

    return (
        <S.Wrapper>
            <Header title="백엔드 게시판"/>
            <S.Content>
                {Board.map((post, index) => (
                    <S.Back>
                        <SchBoard 
                            key={index}
                            title={post.title}
                            context={post.context}
                        />                        
                    </S.Back>
                ))}
            </S.Content>
            <Link to='/'>
                <WriteBtn />
            </Link>
        </S.Wrapper>
    )
}

export default BeBoardPage
