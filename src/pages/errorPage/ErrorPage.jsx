//404에러페이지

import styled from "styled-components";
import ErrorIcon from "@assets/icons/Error404.svg";
export const ErrorPage = () => {
  return (
    <Wrapper>
      <Content>
        <IconWrapper>
          <img src={ErrorIcon} alt="Error" />
        </IconWrapper>
        <Title>404</Title>
        <Body>
          죄송합니다. 페이지를 찾을 수 없습니다. <br /> 입력하신
          주소를 다시 한 번 확인해주세요.
        </Body>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  /* height: 100vh; //뷰포트 높이에 따라 반응 */
  height: calc(var(--vh, 1vh) * 90);

  background: #fff;
  //background-color는 단색배경에만 적용됨
  box-sizing: border-box;
  padding: 0 5.56vw; /* 좌우 360 800기준으로 잡음 4.5vh*/
`;
const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 100px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 185px;
  height: auto;
`;
const Title = styled.div`
  margin-top: 20px;
  display: flex;

  color: #ff7710;
  line-height: 100%;
  font-size: 60px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`;
const Body = styled.div`
  margin-top: 9px;
  display: flex;
  color: #111111;
  line-height: 140%;
  font-size: 16px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
`;
