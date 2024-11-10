// 회원가입 페이지
import * as S from "./SignupPage.styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@components/Header";
import { Button } from "@components/account/Button";
import { InputBox } from "@components/account/InputBox";
import { LionClass } from "@components/account/LionClass";
import invisibleIcon from "@assets/icons/eyeClosedToggle.svg";
import visibleIcon from "@assets/icons/eyeOpenedToggle.svg";

export const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    nickname: "",
    id: "",
    password: "",
    passwordConfirm: "",
    email: "",
    class: "",
  });

  const [PwVisible, setPwVisible] = useState(false);
  const [ConfirmPwVisible, setConfirmPwVisible] = useState(false);

  const [PwValid, setPwValid] = useState(null);
  const [FormComplete, setFormComplete] = useState(false);

  const InputChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (field === "passwordConfirm") {
      setPwValid(null);
    }
  };

  // 비밀번호 토글
  const togglePwVisibility = () => {
    setPwVisible((prev) => !prev);
  };

  // 비밀번호 확인 토글
  const toggleConfirmPwVisibility = () => {
    setConfirmPwVisible((prev) => !prev);
  };

  // 비밀번호 유효성 검사 (8자리 이상, 영어/숫자 포함)
  const checkPw = () => {
    const pwPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (pwPattern.test(form.password)) {
      alert("비밀번호로 사용 가능합니다.");
      setPwValid(true);
    } else {
      alert("비밀번호는 영어/숫자 8자 이상이어야 합니다.");
      setPwValid(false);
    }
  };

  // 비밀번호 일치 여부 확인
  const checkConfirmPw = () => {
    if (form.password === form.passwordConfirm) {
      alert("비밀번호와 일치합니다.");
    } else {
      alert("비밀번호와 일치하지 않습니다.");
    }
  };

  useEffect(() => {
    const Complete = Object.values(form).every((value) => value.trim() !== "");
    setFormComplete(Complete);
  }, [form]);

  const handleNextPage = () => {
    if (FormComplete) {
      navigate("/verification", { state: form });
    }
  };

  return (
    <S.Wrapper>
      <Header title="회원가입" />
      <S.ContentWrap>
        <InputBox title="이름" value={form.name} onChange={InputChange("name")} />
        <InputBox title="닉네임" value={form.nickname} onChange={InputChange("nickname")} />
        <InputBox title="아이디" value={form.id} onChange={InputChange("id")} />

        <S.PasswordWrapper>
          <InputBox
            title="비밀번호"
            type={PwVisible ? "text" : "password"}
            value={form.password}
            onChange={InputChange("password")}
            toggleIcon={PwVisible ? visibleIcon : invisibleIcon}
            onToggleClick={togglePwVisibility}
          />
          <S.CheckButton onClick={checkPw}>확인</S.CheckButton>
        </S.PasswordWrapper>

        <S.PasswordWrapper>
          <InputBox
            title="비밀번호 확인"
            type={ConfirmPwVisible ? "text" : "password"}
            value={form.passwordConfirm}
            onChange={InputChange("passwordConfirm")}
            toggleIcon={ConfirmPwVisible ? visibleIcon : invisibleIcon}
            onToggleClick={toggleConfirmPwVisibility}
          />
          <S.CheckButton onClick={checkConfirmPw}>확인</S.CheckButton>
        </S.PasswordWrapper>

        <InputBox title="이메일" value={form.email} onChange={InputChange("email")} />

        <LionClass value={form.class} onChange={InputChange("class")} />

        <Button onClick={handleNextPage} disabled={!FormComplete} btnName="다음" />
      </S.ContentWrap>
    </S.Wrapper>
  );
};
