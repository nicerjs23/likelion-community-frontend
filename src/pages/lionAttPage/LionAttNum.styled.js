import styled from "styled-components";

export const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5.56vw;
    max-width: 540px;
    justify-content: center;
    align-items: center;
    margin-top: 7.25vh;
`;

export const Info = styled.div`
    font-size: 18px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    margin-top: 47px;
    color: ${({att}) => 
    att==="success" ? "#0074DA":
    att==="fail" ? "#E70000": "0074DA"};
`;

export const Nums = styled.div`
    display: flex;
    gap: 10px;
    margin: 34px 0;
`;

export const Num = styled.input`
    border: 2px solid #FF7710;
    border-radius: 20px;
    background-color: #fff;
    width: 60px;
    height: 60px;
    font-size: 22px;
    font-weight: 700;
    padding: 21px;
    text-align: center;

    &:focus {
        outline: none;
    }
`;

export const Button = styled.button`
    width: 85px;
    height: 38px;
    font-weight: 600;
    line-height: 22px;
    font-size: 16px;
    border-radius: 10px;
    border: 2px solid ${({complete}) => (complete?"#FF7710":"#9C9CA1")};
    background-color: ${({complete}) => (complete?"#FF7710":"#fff")};
    color: ${({complete}) => (complete?"#fff":"#9C9CA1")};
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.12);
    cursor:${({complete}) => (complete?"pointer":"default")};
`