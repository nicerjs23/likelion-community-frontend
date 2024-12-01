import styled from "styled-components";

import React from 'react'

export const ChatMember = ({name, img, context}) => {
    return (
        <Wrapper>
            <Content>
                <Profile src={img} alt="profile img"></Profile>
                <Right>
                    <Name>{name}</Name>
                    <Context>{context}</Context>
                </Right>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F1F3F5;
    padding: 10px 0;
    height: 100px;
`

const Content = styled.div`
    display: flex;
    width: 100%;
`
const Profile = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-right: 8px;
    border-radius: 50%;

`
const Right = styled.div`
    font-size: 14px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: hidden;
`

const Name = styled.h2`
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const Context = styled.p`
    color: #8A8A8A;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`