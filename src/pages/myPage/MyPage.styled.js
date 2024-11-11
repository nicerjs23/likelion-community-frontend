import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 540px;
    width: 88.89%;
    margin: 0 auto;
    align-items: center;
`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    margin-top: 7.25vh;
    margin-bottom: 24px;
    width: 100%;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: space-between;
`

export const Img = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid black;

`

export const Top = styled.div`
    display: flex;
    gap: 7px;
`
export const Mid = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`
export const Bottom = styled.div`
    font-size: 15px;
`

export const Title = styled.h2`
    font-size: 16px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
`

export const Edit = styled.p`
    color: #999999;
    font-size: 14px;

`

export const Name = styled.div`
    font-size: 15px;
`

export const Badge = styled.div`
    border-radius: 10px;
    background: #D9D9D9;
    padding: 3px 10px;
`

export const School = styled.div`
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    background-color: #FFF;
    padding: 20px;
    width: 100%;
    margin-bottom: 24px;

`

export const SchoolName = styled.div`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    font-size: 16px;
`

export const Mypost = styled.div`
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    background-color: #FFF;
    width: 100%;
    padding: 12px 20px;
    gap: 12px;
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
`

export const Post = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`
export const Comment = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`
export const Scrap = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`

export const PostImg = styled.img`
    width: 22px;
    height: 22px;

`

export const MypostTitle = styled.p`
    font-size: 16px;
    
`