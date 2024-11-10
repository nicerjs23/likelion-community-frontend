import React, { useEffect, useRef } from 'react'
import * as S from './ChatPage.styled'
import { Header } from '@components/Header'
import logo from '@assets/icons/welcomeLogo.svg'
import send from '@assets/icons/send.svg'
import link from '@assets/icons/link.svg'

export const ChatPage = () => {

    const chatRef = useRef(null);

    // 채팅 스크롤 하단으로
    useEffect(() => {
        const scrollDown = () => {
            if (chatRef.current) {
                chatRef.current.scrollTop = chatRef.current.scrollHeight;
            }
        };
-
        setTimeout(scrollDown,100);

        const observer = new MutationObserver(scrollDown);
        if (chatRef.current) {
            observer.observe(chatRef.current, { childList: true, subtree: true });
        }

        return () => observer.disconnect();
    }, []);

    return (
        <S.Wrapper>
            <Header title="김사자"/>
            <S.Chat ref={chatRef}>
                <S.RightDiv>
                    <S.RightContext>Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.</S.RightContext>
                </S.RightDiv>
                <S.LeftDiv>
                    <S.Profile src={logo}/>
                    <S.LeftContext>Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie</S.LeftContext>
                </S.LeftDiv>
                <S.RightDiv>
                    <S.RightContext>안녕하세요</S.RightContext>
                </S.RightDiv>
                <S.LeftDiv>
                    <S.Profile src={logo}/>
                    <S.LeftContext>안녕하세요</S.LeftContext>
                </S.LeftDiv>
                <S.LeftDiv>
                    <S.Profile src={logo}/>
                    <S.LeftContext>
                        <img src="https://cdn.pixabay.com/photo/2024/01/24/13/14/boat-8529554_1280.jpg" alt="chat img" />
                    </S.LeftContext>
                </S.LeftDiv>
                <S.RightDiv>
                    <S.RightContext>
                        <img src="https://cdn.pixabay.com/photo/2024/01/24/13/14/boat-8529554_1280.jpg" alt=" chat img" />
                    </S.RightContext>
                </S.RightDiv>
            </S.Chat>
            <S.SendWrap>
                <S.Send>
                    <S.SendRight>
                        <S.InputImg img={link}>
                            <S.Input type="file" accept="image/*"/>
                        </S.InputImg>
                        <S.TextInput />
                    </S.SendRight>
                    <S.Btn><img src={ send } alt=" send icon"/></S.Btn>
                </S.Send>                
            </S.SendWrap>
        </S.Wrapper>
    )
}

export default ChatPage;