import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 540px;
    width: 88.89%;
    margin: 0 auto;
    align-items: center;
    position: relative;
`

export const Noti = styled.div`
    font-size: 15px;
    font-family: ${({ theme }) => 
    theme.fonts.PretendardMedium["font-family"]};
    padding: 9px 15px;
    border-radius: 10px;
    border: 1.5px solid #FF7D2C;
    background: rgba(247, 148, 30, 0.25);
    margin-top: 7.25vh;
    width: 100%;
`

export const Content = styled.div`
    width: 100%;
    gap: 9px;
    display: flex;
    flex-direction: column;
    margin: 9px 0;
`