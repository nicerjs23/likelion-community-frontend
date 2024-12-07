// 회원가입 - 회원 인증 페이지

import * as S from "./VerificationPage.styled";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@components/Header";
import { Button } from "@components/account/Button";
import { Loading } from "@components/account/Loading";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import sampleImg from "@assets/images/verification_sample.svg";
import img from "@assets/icons/img.svg";
import axiosInstance from "@apis/axiosInstance";

export const VerificationPage = () => {
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [verificationPhoto, setVerificationPhoto] = useState(null); // 인증 이미지 파일
  const [fileName, setFileName] = useState(""); // 업로드된 파일 이름
  const [isVerified, setIsVerified] = useState(false); // 인증 성공 여부
  const [isValidationAttempted, setIsValidationAttempted] = useState(false); // 검사 시도 여부

  const { goTo } = useCustomNavigate();
  const location = useLocation();
  const formData = location.state;

  // 파일 변경 처리
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVerificationPhoto(file);
    setFileName(file ? file.name : "");
    setIsVerified(false); // 새 파일 업로드 시 인증 상태 초기화
    setIsValidationAttempted(false); // 검사 시도 상태 초기화
  };

  // 사진 유효성 검사
  const handlePhotoValidation = async () => {
    if (!verificationPhoto) {
      alert("파일을 선택해주세요.");
      return;
    }

    setIsLoading(true);
    setIsValidationAttempted(true);

    const finalFormData = new FormData();
    finalFormData.append("verification_photo", verificationPhoto);

    try {
      const response = await axiosInstance.post("/signup/photo_validation/", finalFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.is_valid) {
        setIsVerified(true);
        alert("유효한 인증 이미지입니다.");
      } else {
        setIsVerified(false);
        alert("유효하지 않은 이미지입니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("사진 인증 실패:", error.response?.data || error.message);
      alert("사진 인증 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  // 회원가입 제출
  const handleSignupSubmit = async () => {
    if (!formData || !isVerified) {
      alert("모든 필드를 채우고 인증을 완료해주세요.");
      return;
    }

    const finalFormData = new FormData();
    finalFormData.append("name", formData.name);
    finalFormData.append("nickname", formData.nickname);
    finalFormData.append("username", formData.username);
    finalFormData.append("password", formData.password);
    finalFormData.append("password2", formData.passwordConfirm);
    finalFormData.append("email", formData.email);
    finalFormData.append("membership_term", formData.membership_term);
    if (verificationPhoto) {
      finalFormData.append("verification_photo", verificationPhoto);
    }

    try {
      const response = await axiosInstance.post("/signup/signup/", finalFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("회원가입이 완료되었습니다.");
      goTo("/login");
    } catch (error) {
      console.error("회원가입 실패:", error.response?.data || error.message);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  // 로딩 화면 표시
  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Wrapper>
      <Header title="회원가입" />
      <S.ContentWrap>
        <S.Text>회원 인증하기</S.Text>
        <S.SampleImg>
          <p>예시 이미지</p>
          <img src={sampleImg} alt="예시 이미지" />
          <p className="Notice">
            멋쟁이사자처럼 공식 홈페이지에서 회원 정보 페이지를 <br />
            로고와 개인정보가 나오도록 전체 캡처해서 업로드 해주세요!
          </p>
        </S.SampleImg>
      </S.ContentWrap>

      <S.ContentWrap>
        <S.Text>회원인증</S.Text>
        <S.InputWrap>
          <S.InputBox>
            <S.InputImg img={img}>
              <S.Input type="file" accept="image/*" onChange={handleFileChange} />
              <S.FileName>{fileName || "파일을 선택해주세요"}</S.FileName>
            </S.InputImg>
          </S.InputBox>
          <S.Confirm onClick={handlePhotoValidation}>검사</S.Confirm>
        </S.InputWrap>
        {/* 인증 메시지 */}
        {isValidationAttempted &&
          (isVerified ? (
            <S.CompleteMessage>유효한 인증 이미지입니다.</S.CompleteMessage>
          ) : (
            <S.FailureMessage>유효한 이미지를 넣어주세요.</S.FailureMessage>
          ))}
      </S.ContentWrap>

      <S.BottomWrap>
        <Button btnName="회원가입" onClick={handleSignupSubmit} disabled={!isVerified} />
        <S.LogIn>
          <span className="text">이미 회원이신가요?</span>
          <span className="underline" onClick={() => goTo("/login")}>
            로그인
          </span>
        </S.LogIn>
      </S.BottomWrap>
    </S.Wrapper>
  );
};
