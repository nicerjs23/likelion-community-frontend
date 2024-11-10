// 메인 페이지에 사용할 헤더
import styled from "styled-components";
import logo from "@assets/images/orangeLogo.png"
import alarm from "@assets/icons/alarm.svg"
export const MainHeader = ({title}) => {

    return (
        <Wrapper>
            <Content>
                <Left>
                    <img src={logo} alt="logo" />
                    <Title>{title}</Title>
                </Left>
                <Right>
                    <img src={alarm} alt="alarm logo" />
                    <Profile src='' alt=" profile img"></Profile>
                </Right>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 540px;
    height: 35px;
    background-color: #F1F3F5;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
`;

const Content = styled.div`
    width: 88.89%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.div`
    color: #FF7710;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardExtraBold["font-family"]};
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 24px;

    img {
        height: 34px;
    }
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    gap: 9px;

    img {
        cursor: pointer;
    }
`;

const Profile = styled.img`
    border-radius: 50%;
    border: 1px solid black;
    width: 28px;
    height: 28px;
    object-fit: cover;
`;