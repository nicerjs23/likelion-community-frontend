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

import axiosInstance from "@apis/axiosInstance";

export const LoginPage = () => {
  const { goTo } = useCustomNavigate();

  // 입력 필드 상태 관리
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 버튼 활성화 및 오류 메시지 상태
  const [notAllow, setNotAllow] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // 비밀번호 가시성 상태
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // 아이디 입력 핸들러
  const handleId = (event) => {
    setId(event.target.value);
    setShowErrorMessage(false); // 입력 시 오류 메시지 숨기기
  };

  // 비밀번호 입력 핸들러
  const handlePw = (event) => {
    setPw(event.target.value);
    setShowErrorMessage(false); // 입력 시 오류 메시지 숨기기
  };

  // 비밀번호 보이기/숨기기 토글
  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  // 로그인 버튼 활성화 상태 설정
  useEffect(() => {
    setNotAllow(id.trim() === "" || pw.trim() === ""); // 아이디나 비밀번호가 비어 있으면 비활성화
  }, [id, pw]);

  // 로그인 버튼 클릭 시 API 요청
  const onClickConfirmButton = async () => {
    try {
      // 로그인 API에 POST 요청 보내기
      const response = await axiosInstance.post(
        "/signup/login/custom/",
        {
          username: id,
          password: pw,
        }
      );

      if (response.status === 200) {
        // 로그인 성공 시
        console.log("로그인 성공:", response.data);
        goTo("/main"); // 메인 페이지로 이동
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // 400 Bad Request 시
        console.log("에러 메시지:", error.response.data.error);
        setShowErrorMessage(true); // 오류 메시지 표시
      } else {
        // 기타 에러
        console.log("기타 에러:", error.message);
      }
    }
  };

  return (
    <S.Wrapper>
      <Header title="로그인" />
      <S.ContentWrap>
        {/* 아이디 입력 필드 */}
        <InputBox
          title="아이디"
          placeholder="아이디를 입력해 주세요"
          icon={idIcon}
          value={id}
          onChange={handleId}
        />
        {/* 비밀번호 입력 필드 */}
        <InputBox
          title="비밀번호"
          placeholder="비밀번호를 입력해 주세요"
          icon={pwIcon}
          type={isPasswordVisible ? "text" : "password"} // 비밀번호 보이기/숨기기 설정
          value={pw}
          onChange={handlePw}
          toggleIcon={isPasswordVisible ? visibleIcon : invisibleIcon}
          onToggleClick={handlePasswordVisibility}
        />

        {/* 오류 메시지 */}
        {showErrorMessage && (
          <S.ErrorMessage>
            아이디 또는 비밀번호가 잘못되었습니다.
          </S.ErrorMessage>
        )}
        {/* 로그인 버튼 */}
        <Button
          onClick={onClickConfirmButton}
          disabled={notAllow}
          btnName="로그인"
        />
        {/* 회원가입 링크 */}
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
