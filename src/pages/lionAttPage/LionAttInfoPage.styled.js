import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 540px;
    justify-content: center;
    align-items: center;
    margin-top: 7.25vh;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 88.89%;
    height: calc(100vh - 7.25vh - 96px);
    overflow-y: auto;
`

export const Session = styled.div`
    margin-top: 15px;
    margin-bottom: 30px;
`

export const Top = styled.div`
    border-radius: 32px 32px 0px 0px;
    background: #FF7710;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
`

export const TopImg = styled.img`
    width: 40px;
    height: 40px;
`

export const Mid = styled.div`
    padding: 17px 15px;
    border-radius: 0 0 32px 32px;
    background: #FFF;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
`

export const Date = styled.div`
    color: #767676;
    font-size: 14px;
    margin-bottom: 5px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    display: flex;
    align-items: center;
    line-height: 140%;
    letter-spacing: -0.35px;
`
export const DateImg = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 4px;
`

export const Location = styled.div`
    color: #767676;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    display: flex;
    align-items: center;
    line-height: 140%;
    letter-spacing: -0.35px;
`

export const LocationImg = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 4px;
`

export const Title = styled.div`
    color: #111;
    font-size: 16px;
    margin-bottom: 9px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    line-height: 140%;
    letter-spacing: -0.4px;
`

export const Detail = styled.div`
    font-size: 14px;
    color: #000;
    margin-bottom: 14px;
    line-height: 140%;
    letter-spacing: -0.35px;
`

export const FileDiv = styled.div`
    border-radius: 32px;
    background: rgba(247, 148, 30, 0.25);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
    display: flex;
    justify-content: space-between;
    padding: 8px 10px;
    width: 100%;

`
export const FileName = styled.div`
    color: #999;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`

export const State = styled.div`
    border-radius: 32px;
    background: #FFF;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
    padding: 12px 15px;
`
export const StateName = styled.div`
    font-size: 16px;
    color: #767676;
`

export const Number = styled.div`
    font-size: 22px;
`

export const Attend = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
    width: 90px;
    border-radius: 32px;
    aspect-ratio: 1 / 1;
`

export const Late = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
    width: 90px;
    border-radius: 32px;
    aspect-ratio: 1 / 1;
`
export const Absent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
    width: 90px;
    border-radius: 32px;
    aspect-ratio: 1 / 1;
`

export const Out = styled.div`
    padding: 30px 40px;
    border-radius: 32px;
    background: #FFF;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
    font-size: 16px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    line-height: 140%;
    letter-spacing: -0.4px;
`

export const Btn = styled.button`
    font-size: 16px;
    padding: 17px 0;
    border-radius: 32px;
    color: #fff;
    background-color: ${({ isActive }) => (isActive ? '#FF7710' : '#D9D9D9')};
    cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
    position: fixed;
    bottom: 30px;
    width: 88.89%;
    max-width: 480px;
`