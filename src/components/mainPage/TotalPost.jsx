import React from 'react'
import styled from "styled-components";

export const TotalPost = ({board_title,body}) => {
    return (
        <Wrapper>
            <Type>{board_title}</Type>
            <Content>{body}</Content>
        </Wrapper>
    )
}

export default TotalPost

export const Wrapper = styled.div`
    width: 100%;
    border-radius: 10px;
    background: #EFEFEF;
    padding: 9px 15px;
`

export const Type = styled.div`
    font-size: 10px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardRegular["font-family"]};
    
`

export const Content = styled.div`
    font-size: 10px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`