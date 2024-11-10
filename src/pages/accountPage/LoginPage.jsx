// 기본 로그인 페이지
import * as S from "./LoginPage.styled";
import { Header } from "@components/Header";
import { Button } from "@components/account/Button";
import { InputBox } from "@components/account/InputBox";
import idIcon from "@assets/icons/id.svg";
import pwIcon from "@assets/icons/pw.svg";
import invisibleIcon from "@assets/icons/eyeClosedToggle.svg";
import visibleIcon from "@assets/icons/eyeOpenedToggle.svg";
import { useEffect, useState } from "react";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

const User = {
  id: "testId",
  pw: "testPw",
};

export const LoginPage = () => {
  const { goTo } = useCustomNavigate();

  // 로그인 성공/실패
  const [notAllow, setNotAllow] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleId = (event) => {
    setId(event.target.value);
    setShowErrorMessage(false);
  };

  const handlePw = (event) => {
    setPw(event.target.value);
    setShowErrorMessage(false);
  };

  const onClickConfirmButton = () => {
    if ((id === User.id) & (pw === User.pw)) {
      goTo("/main");
    } else {
      setShowErrorMessage(true);
    }
  };

  // 비밀번호 보이기/숨기기
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  // 로그인 버튼 활성화
  useEffect(() => {
    setNotAllow(id.trim() === "" || pw.trim() === "");
  }, [id, pw]);

  return (
    <S.Wrapper>
      <Header title="로그인" />
      <S.ContentWrap>
        <InputBox title="아이디" placeholder="아이디를 입력해 주세요" icon={idIcon} value={id} onChange={handleId} />
        <InputBox
          title="비밀번호"
          placeholder="비밀번호를 입력해 주세요"
          icon={pwIcon}
          type={isPasswordVisible ? "text" : "password"}
          value={pw}
          onChange={handlePw}
          toggleIcon={isPasswordVisible ? visibleIcon : invisibleIcon}
          onToggleClick={handlePasswordVisibility}
        />

        {showErrorMessage && <S.ErrorMessage>아이디 또는 비밀번호가 잘못되었습니다.</S.ErrorMessage>}
        <Button onClick={onClickConfirmButton} disabled={notAllow} btnName="로그인" />
        <S.Signup>
          <span className="text">아직 회원이 아니신가요?</span>
          <span className="underline" onClick={() => goTo("/signup")}>
            회원가입
          </span>
        </S.Signup>
      </S.ContentWrap>
    </S.Wrapper>
  );
};
