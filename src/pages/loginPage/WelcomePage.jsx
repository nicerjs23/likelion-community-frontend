//랜딩페이지,웰컴페이지 담당자: 이동건
import * as S from "./WelcomePage.styled";
import welcomeLogo from "@assets/images/welcomeLogo.png";
import kakao from "@assets/icons/kakao.png";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

export const WelcomePage = () => {
  //useCustomNavigate훅을 이용해서 버튼클릭시 이동
  const { goTo } = useCustomNavigate();

  return (
    <S.Wrapper>
      <S.Content>
        <S.LogoWrapper>
          <img
            src={welcomeLogo}
            alt="Welcome Logo"
            style={{ width: "auto", height: "22.25vh" }}
          />
          <S.LogoTextWrapper>
            <S.LogoText>출석부터 네트워킹까지 한번에!</S.LogoText>
            <S.LogoText className="Title">EVERION</S.LogoText>
          </S.LogoTextWrapper>
        </S.LogoWrapper>
        <S.BtnWrapper>
          <S.Btn onClick={() => goTo("/main")}>
            <img
              src={kakao}
              alt="kakao Logo"
              style={{ width: "auto", height: "3.75vh" }}
            />
            <span className="kakao">카카오 로그인</span>
          </S.Btn>
          <S.Btn
            onClick={() => goTo("/main")}
            color="rgba(255, 255, 255, 0.80)"
          >
            로그인
          </S.Btn>
        </S.BtnWrapper>
        <S.SignUp>
          <span>아직 회원이 아니신가요?</span>
          <span className="underline" onClick={() => goTo("/main")}>
            회원가입
          </span>
        </S.SignUp>
      </S.Content>
    </S.Wrapper>
  );
};
