import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 540px;
    width: 88.89%;
    margin: 0 auto;
    align-items: center;
`

export const Content = styled.div`
    border-radius: 10px;
    border: 2px solid #D9D9D9;
    background: #FFF;
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 7.25vh;
    width: 100%;
    margin-bottom: 110px;
`

export const Title = styled.h2`
    font-size: 16px;
    color: #7C7C82;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    margin-bottom: 15px;
`

export const Posts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`

export const Post = styled.div`
    padding: 12px;
    border-radius: 10px;
    background: #EFEFEF;
`

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`

export const Name = styled.div`
    font-size: 14px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`

export const More = styled.div`
    font-size: 12px;
    color: #7C7C82;
`

export const Context = styled.div`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    font-size: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`