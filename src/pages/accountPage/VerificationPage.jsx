// // 회원가입 인증 페이지

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
  const [isLoading, setIsLoading] = useState(false);
  const [verificationPhoto, setVerificationPhoto] = useState(null); // isVerified 상태 제거
  const [fileName, setFileName] = useState("");
  const { goTo } = useCustomNavigate();
  const location = useLocation();
  const formData = location.state;

  useEffect(() => {
    if (formData) {
      console.log("전달된 회원가입 정보:", formData);
    } else {
      console.log("회원가입 정보가 없습니다.");
    }
  }, [formData]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVerificationPhoto(file);
    setFileName(file ? file.name : "");
    console.log("선택한 이미지 파일:", file); // 이미지 파일 확인
  };

  const handleSignupSubmit = async () => {
    if (!formData) {
      alert("모든 필드를 채워주세요.");
      return;
    }
    
    setIsLoading(true);

    const finalFormData = new FormData();
    finalFormData.append("name", formData.name);
    finalFormData.append("nickname", formData.nickname);
    finalFormData.append("username", formData.username);
    finalFormData.append("password", formData.password);
    finalFormData.append("password2", formData.passwordConfirm);
    finalFormData.append("email", formData.email);
    finalFormData.append("membership_term", formData.membership_term);

    // verificationPhoto가 있으면 추가
    if (verificationPhoto) {
      finalFormData.append("verification_photo", verificationPhoto);
    }

    console.log("보낸 데이터:");
    for (let [key, value] of finalFormData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await axiosInstance.post(
        "/signup/signup/",
        finalFormData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("회원가입 성공:", response.data);
      goTo("/login");
    } catch (error) {
      if (error.response) {
        console.error("회원가입 실패:", error.response.data);
        alert(
          "회원가입 실패: " +
            (error.response.data.error || "알 수 없는 오류")
        );
      } else {
        console.error("오류:", error.message);
        alert("네트워크 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    }
  };

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
              <S.Input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              <S.FileName>
                {fileName || "파일을 선택해주세요"}
              </S.FileName>
            </S.InputImg>
          </S.InputBox>
          <S.Confirm  onClick={handleSignupSubmit}>검사</S.Confirm>
        </S.InputWrap>
      </S.ContentWrap>

      <S.ContentWrap>
        <Button btnName="회원가입" />
        <S.LogIn>
          <span className="text">이미 회원이신가요?</span>
          <span className="underline" onClick={() => goTo("/login")}>
            로그인
          </span>
        </S.LogIn>
      </S.ContentWrap>
    </S.Wrapper>
  );
};