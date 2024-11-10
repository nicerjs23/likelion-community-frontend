import React from 'react'
import * as S from './ChatListPage.styled'
import { MainHeader } from '@components/MainHeader'
import { ChatMember } from '@components/chat/ChatMember'
import { Footer } from '@components/Footer'
import logo from '@assets/icons/welcomeLogo.svg';
import { Link } from 'react-router-dom'


export const ChatListPage = () => {
    return (
        <S.Wrapper>
            <MainHeader title="EVERION"/>
            <S.Members>
                <Link to='/chat'>
                    <ChatMember name='김사자' context='병원 가느라 활동에 참석하지 못했습니다. 증빙 자료 첨부합니다. 병원 가느라 활동에 참석하지 못했습니다. 증빙 자료 첨부합니다. ' img={logo} />
                </Link>
                <ChatMember name='김사자1' context='병원 가느라 활동에 참석하지 못했습니다. 증빙 자료 첨부합니다. ' img={logo}/>
                <ChatMember name='김사자2' context='병원 가느라 활동에 참석하지 못했습니다. 증빙 자료 첨부합니다. ' img={logo}/>
                <ChatMember name='김사자3' context='병원 가느라 활동에 참석하지 못했습니다. 증빙 자료 첨부합니다. ' img={logo}/>
                <ChatMember name='김사자4' context='병원 가느라 활동에 참석하지 못했습니다. 증빙 자료 첨부합니다. ' img={logo}/>
                <ChatMember name='김사자5' context='병원 가느라 활동에 참석하지 못했습니다. 증빙 자료 첨부합니다. ' img={logo}/>
                <ChatMember name='김사자6' context='병원 가느라 활동에 참석하지 못했습니다. 증빙 자료 첨부합니다. ' img={logo}/>
                <ChatMember name='김사자7' context='병원 가느라 활동에 참석하지 못했습니다. 증빙 자료 첨부합니다. ' img={logo}/>
                <ChatMember name='김사자8' context='병원 가느라 활동에 참석하지 못했습니다. 증빙 자료 첨부합니다. ' img={logo}/>
            </S.Members>
            <Footer/>
        </S.Wrapper>
    )
}
export default ChatListPage