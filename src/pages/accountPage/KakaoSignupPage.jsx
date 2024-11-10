// 카카오로그인 추가정보 입력 페이지
import * as S from "./KakaoSignupPage.styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import { Header } from "@components/Header";
import { Button } from "@components/account/Button";
import { InputBox } from "@components/account/InputBox";
import { LionClass } from "@components/account/LionClass";
import { Loading } from "@components/account/Loading";
import sampleImg from "@assets/images/verification_sample.svg";
import img from "@assets/icons/img.svg";

export const KakaoSignupPage = () => {
  const navigate = useNavigate();
  const { goTo } = useCustomNavigate();

  const [form, setForm] = useState({
    name: "",
    nickname: "",
    class: "",
  });
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const InputChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  useEffect(() => {
    const Complete = Object.values(form).every((value) => value.trim() !== "");
    setIsFormComplete(Complete);
  }, [form]);

  // 인증이미지 검사
  const handleCheck = () => {
    setIsLoading(true); // 로딩 시작
    setIsVerified(false); // 초기화

    // 로딩 2초 (로딩 페이지 잘 작동하나 보려고 넣어뒀습니다)
    // 검사 완료 상태 업데이트
    setTimeout(() => {
      setIsLoading(false);
      setIsVerified(true);
    }, 2000);
  };

  const handleSignup = () => {
    if (isFormComplete && isVerified) {
      navigate("/main", { state: form });
    }
  };

  return (
    <S.Wrapper>
      <Header title="회원가입" />
      <S.ContentWrap>
        <InputBox title="이름" value={form.name} onChange={InputChange("name")} />
        <InputBox title="닉네임" value={form.nickname} onChange={InputChange("nickname")} />
        <LionClass value={form.class} onChange={InputChange("class")} />
      </S.ContentWrap>

      <S.ContentWrap>
        <S.Text>회원 인증하기</S.Text>
        <S.SampleImg>
          <p>예시 이미지</p>
          <img src={sampleImg} alt="예시 이미지" />
          <p className="Notice">
            멋쟁이사자처럼 공식 홈페이지에서 회원 정보 페이지를 <br /> 로고와 개인정보가 나오도록 전체캡쳐해서 업로드 해주세요!!
          </p>
        </S.SampleImg>
      </S.ContentWrap>

      <S.ContentWrap>
        <S.Text>회원인증</S.Text>
        <S.InputWrap>
          <S.InputBox>
            <S.InputImg img={img}>
              <S.Input type="file" accept="image/*" />
            </S.InputImg>
          </S.InputBox>

          <S.Confirm onClick={handleCheck}>검사</S.Confirm>
        </S.InputWrap>
        {isLoading && <Loading />}
        {isVerified && <S.CompleteMessage>유효한 회원 인증 이미지입니다.</S.CompleteMessage>}
      </S.ContentWrap>

      <S.ContentWrap>
        <Button btnName="회원가입" onClick={handleSignup} disabled={!isFormComplete || !isVerified} />
        <S.LogIn>
          <span className="text">이미 회원이신가요??</span>
          <span className="underline" onClick={() => goTo("/login")}>
            로그인
          </span>
        </S.LogIn>
      </S.ContentWrap>
    </S.Wrapper>
  );
};
