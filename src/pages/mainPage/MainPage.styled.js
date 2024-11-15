import styled from "styled-components";

export const MainWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 88.89%;
    max-width: 540px;
    justify-content: center;
    align-items: center !important;
    margin: 7.25vh auto 110px auto;
`;

export const MainSwiper = styled.div`
    width: 100%;
`

export const Slider1 = styled.div`
    background-color: #FF7710;
    width: 100% !;
    height: 100%;
    display: flex;
    gap: 10px;
    height: 140px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`

export const Slider2 = styled.img`
    border-radius: 20px;
    height: 140px;
    width: 100%;
    object-fit: cover;
`


export const Left = styled.div`
    display: flex;
    flex-direction: column;
`

export const Desc = styled.div`
    font-size: 10px;
    color: #fff;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    line-height: 110%;
    letter-spacing: -0.25px;
`

export const Name = styled.div`
    font-size: 32px;
    color: #fff;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBlack["font-family"]};
    line-height: 100%;
    letter-spacing: -0.8px;
`

export const RightLogo = styled.img`
    width: 58px;
    height: 58px;
`

export const Board = styled.div`
    border-radius: 10px;
    border: 2px solid #D9D9D9;
    background: #FFF;
    width: 100%;
    margin-top: 24px;
    padding: 15px 20px;

`

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Title = styled.div`
    font-size: 15px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const More = styled.div`
    font-size: 10px !important;
    color: #7C7C82;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardRegular["font-family"]};
`

export const Posts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`