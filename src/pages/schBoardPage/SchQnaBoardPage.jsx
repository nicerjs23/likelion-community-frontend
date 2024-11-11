import React from 'react'
import * as S from './SchQnaBoardPage.styled'
import { Header } from '@components/Header'
import { Dropdown } from '@components/adminAtt/Dropdown'
import { Board as SchBoard } from '@components/schBoard/Board'
import { WriteBtn } from '@components/schBoard/WriteBtn'
import { Link } from 'react-router-dom'

export const SchQnaBoardPage = () => {

    const filterData = {
        data: ["트랙선택", "프론트엔드", "백엔드", "기획/디자인"],
    };

    const Board= [
        {
            title: '🌍지구🌍를 사랑하고 보호하고 싶다...',
            context: '지구를 사랑하고 보호하고 싶다면, 우리 팀 지구를 구해라 팀으로 오시는걸 추천 드립니다람쥐...'
            
        }
    ]

    return (
        <S.Wrapper>
            <Header title='질문 게시판' />
            <S.Content>
                <Dropdown props={filterData}/>
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

export default SchQnaBoardPage
