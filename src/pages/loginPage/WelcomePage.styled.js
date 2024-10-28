import styled from "styled-components";

//화면 전체를 감싸는 래퍼 +배경색
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgGradient};
  //background-color는 단색배경에만 적용됨
  box-sizing: border-box;
  padding: 0 5.56vw; /* 좌우 360 800기준으로 잡음 4.5vh*/
`;

//안에 컨텐츠를 감싸는 래퍼
export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;

//로고부분 래퍼
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 27.25vh;
  margin-bottom: 13.875vh;
  width: 100%;

  gap: 11px;
`;
//로고중 텍스트 감싸는거
export const LogoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 20px; */
`;
//텍스트 css
export const LogoText = styled.div`
  display: flex;
  color: #222;
  font-size: clamp(1px, 5.56vw, 30px);
  line-height: 1;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  &.Title {
    line-height: 1.2; //flex로 해두면 행간적용이 풀려서 명시해줘야됨
    font-size: clamp(1px, 12.5vw, 67.5px);
    font-family: ${({ theme }) =>
      theme.fonts.PretendardBlack["font-family"]};
  }
`;

//버튼두개  감싸는거
export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.25vh;
`;

export const Btn = styled.button`
  cursor: pointer;
  display: flex;
  width: 100%;
  height: 6.25vh;
  min-height: 44px; //핸드폰이 아무리 작아져도 이거보다 버튼이 작으면 누르기 힘듬
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) =>
    color || "#FFE812"}; /* props에서 color를 받아 사용 */
  border-radius: 20px;

  font-size: 3.9vw;
  font-size: clamp(1px, 3.9vw, 21px);
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  color: #000000;
  .kakao {
    margin-left: 2.5vw;
  }
`;

export const SignUp = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3.125vh;
  gap: 2.52vw;
  justify-content: center;
  align-items: center;

  font-size: clamp(1px, 3.9vw, 21px);
  color: #000000;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
  .underline {
    text-decoration: underline;
    cursor: pointer;
  }
`;
