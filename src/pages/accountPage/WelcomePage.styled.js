import styled from "styled-components";

//화면 전체를 감싸는 래퍼 +배경색
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  /* height: 100vh; //뷰포트 높이에 따라 반응 */
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden; /* 스크롤 방지 */

  background: ${({ theme }) => theme.colors.bgGradient};
  //background-color는 단색배경에만 적용됨
  box-sizing: border-box;
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
  margin-top: calc(var(--vh, 1vh) * 27.25);
  margin-bottom: calc(var(--vh, 1vh) * 13.875);
  //초반에 %가잘안됐던이유는 margin값이나 padding값은 %를 했을때 가로길이 기준임!!
  //난 세로를기준으로 27.25%줄이려고했었으니까 안맞았던거임
  width: 100%;

  gap: 11px;
  img {
    width: auto;
    height: calc(var(--vh, 1vh) * 22.25);
    min-height: 150px;
    @media (min-width: 540px) {
      width: 200px;
      height: 200px;
    }
  }
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
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  gap: calc(var(--vh, 1vh) * 2.25);
`;

export const Btn = styled.button`
  cursor: pointer;
  display: flex;
  width: 100%;
  height: calc(var(--vh, 1vh) * 6.25);
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
    margin-left: 8px;
  }
`;

export const SignUp = styled.div`
  display: flex;
  width: 100%;
  margin-top: calc(var(--vh, 1vh) * 3.125);
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
