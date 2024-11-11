//랜딩페이지,웰컴페이지 담당자: 이동건
import * as S from "./WelcomePage.styled";
import welcomeLogo from "@assets/icons/welcomeLogo.svg";
import kakao from "@assets/icons/kakao.svg";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import { useEffect } from "react";
import axiosInstance from "@apis/axiosInstance";

export const WelcomePage = () => {
  //useCustomNavigate훅을 이용해서 버튼클릭시 이동
  const { goTo } = useCustomNavigate();

  //계속 스크롤이 생기니까 강제로 body태그에서도 스크롤비활성화해보기
  useEffect(() => {
    // `WelcomePage`에서 스크롤 비활성화
    document.body.style.overflow = "hidden";
    return () => {
      // 페이지를 벗어나면 스크롤 다시 활성화
      document.body.style.overflow = "";
    };
  }, []);

  // const handleKakaoLogin = async () => {
  //   try {
  //     // 카카오 로그인 URL을 백엔드에서 가져오기
  //     const response = await axiosInstance.get(
  //       "/signup/login/kakao/"
  //     );
  //     const kakaoLoginUrl = response.data.url; // 명세서에 있는 "kakao_login_url" 속성 사용
  //     console.log("Kakao Login URL:", kakaoLoginUrl); // URL 출력

  //     // 카카오 로그인 URL로 리다이렉트
  //     window.location.href = kakaoLoginUrl;
  //   } catch (error) {
  //     console.error(
  //       "Error during Kakao login:",
  //       error.response?.data || error.message
  //     );
  //   }
  // };

  const handleKakaoLogin = () => {
    // 백엔드의 카카오 로그인 URL로 직접 이동
    window.location.href = `${
      import.meta.env.VITE_BASE_URL
    }/signup/login/kakao/`;
  };
  // const handleKakaoLogin = async () => {
  //   try {
  //     // 백엔드에 GET 요청을 보내서 리디렉션을 유도
  //     await axiosInstance.get("/signup/login/kakao/");
  //     // 요청이 성공하면, 백엔드에서 302 Redirect 응답으로 카카오 로그인 페이지로 리디렉션 처리
  //   } catch (error) {
  //     console.error(
  //       "Error during Kakao login:",
  //       error.response?.data || error.message
  //     );
  //   }
  // };
  return (
    <S.Wrapper>
      <S.Content>
        <S.LogoWrapper>
          <img src={welcomeLogo} alt="Welcome Logo" />
          <S.LogoTextWrapper>
            <S.LogoText>출석부터 네트워킹까지 한번에!</S.LogoText>
            <S.LogoText className="Title">EVERION</S.LogoText>
          </S.LogoTextWrapper>
        </S.LogoWrapper>
        <S.BtnWrapper>
          <S.Btn onClick={handleKakaoLogin}>
            {/* onClick={() => goTo("/adminAtt")}테스트 용으로연결해둠 */}
            <img
              src={kakao}
              alt="kakao Logo"
              style={{ width: "auto", height: "4vh" }}
            />
            <span className="kakao">카카오 로그인</span>
          </S.Btn>
          <S.Btn
            onClick={() => goTo("/login")}
            color="rgba(255, 255, 255, 0.80)"
          >
            로그인
          </S.Btn>
        </S.BtnWrapper>
        <S.SignUp>
          <span>아직 회원이 아니신가요?</span>
          <span className="underline" onClick={() => goTo("/signup")}>
            회원가입
          </span>
        </S.SignUp>
      </S.Content>
    </S.Wrapper>
  );
};
