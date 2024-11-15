// 마이페이지

import React, { useState, useEffect, useRef } from "react";
import * as S from "./MyPage.styled";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import myPost from "@assets/icons/myPost.svg";
import myComment from "@assets/icons/myComment.svg";
import myScrap from "@assets/icons/myScrap.svg";
import upload from "@assets/icons/upload.svg";
import defaultProfile from "@assets/images/ExImg.svg";
import { Link } from "react-router-dom";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken"; // 커스텀 훅 가져오기
import axiosInstance from "@apis/axiosInstance";

export const MyPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    profile_image: "",
    membership_term: "",
    role: "",
  });
  const [schoolVerified, setSchoolVerified] = useState("");
  const [verificationPhoto, setVerificationPhoto] = useState(null);

  // CSRF 토큰 설정 훅 호출
  useFetchCsrfToken();

  const fileInputRef = useRef(null);
  const profileInputRef = useRef(null);

  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/mypage/");
      console.log("user Response", response.data);

      if (response.data.user_info) {
        setUserInfo({
          name: response.data.user_info.name,
          email: response.data.user_info.email,
          profile_image: response.data.user_info.profile_image,
          membership_term: response.data.user_info.membership_term,
          role: response.data.user_info.role,
        });
        setSchoolVerified(response.data.school_verification_status);
      } else {
        console.log("사용자 정보가 존재하지 않습니다.");
      }
    } catch (e) {
      console.error("error", e);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  // 프로필 이미지 변경
  const handleProfileChange = (e) => {
    const newProfileImage = e.target.files[0];
    if (newProfileImage) {
      const formData = new FormData();
      formData.append("profile_image", newProfileImage);

      axiosInstance
        .patch("/mypage/profileimage/", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          alert("프로필 사진이 변경되었습니다.");
          setUserInfo((prevState) => ({ ...prevState, profile_image: response.data.profile_image }));
        })
        .catch((error) => {
          console.error("프로필 사진 변경 오류:", error);
          alert("프로필 사진 변경 중 오류가 발생했습니다.");
        });
    }
  };

  // 학교 인증 파일 선택 핸들러
  const handleFileChange = (e) => {
    setVerificationPhoto(e.target.files[0]);
  };

  // 프로필 이미지 클릭 시 파일 선택 창 열기
  const handleProfileClick = () => {
    profileInputRef.current.click();
  };

  // SchoolVerify 영역 클릭 시 파일 선택 창 열기
  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  // 학교 인증 요청 함수
  const submitSchoolVerification = async () => {
    if (!verificationPhoto) {
      alert("인증할 사진을 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("verification_photo", verificationPhoto);

    try {
      const response = await axiosInstance.post("/mypage/schoolverification/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("학교 인증이 제출되었습니다.");
      setSchoolVerified("pending");
    } catch (e) {
      console.error("학교 인증 오류:", e);
      alert("학교 인증 중 오류가 발생했습니다.");
    }
  };

  // 로그아웃 함수
  const handleLogout = async () => {
    try {
      await axiosInstance.post("/signup/logout/", {});
      window.location.href = "/";
    } catch (e) {
      console.error("로그아웃 오류:", e);
    }
  };

  // 회원탈퇴 함수
  const handleDeleteAccount = async () => {
    if (window.confirm("정말로 회원탈퇴를 하시겠습니까?")) {
      try {
        await axiosInstance.delete("/signup/delete/");
        window.location.href = "/";
      } catch (e) {
        console.error("회원탈퇴 오류:", e);
      }
    }
  };

  return (
    <S.Wrapper>
      <Header title="마이페이지" />
      <S.Info>
        <S.Left>
          <S.Top>
            <S.Title>내 정보</S.Title>
            <S.Edit></S.Edit>
          </S.Top>
          <S.Mid>
            <S.Name>{userInfo.name}</S.Name>
            <S.Badge>{userInfo.membership_term}기</S.Badge>
            {userInfo.role && <S.Badge>{userInfo.role}</S.Badge>}
          </S.Mid>
          <S.Bottom>{userInfo.email}</S.Bottom>
        </S.Left>
        {/* <S.Img
          src={userInfo.profile_image || defaultProfile}
          alt="profile img"
          onClick={() => profileInputRef.current.click()}
          style={{ cursor: "pointer" }}
        /> */}
        <S.Img
          // 절대 경로와 캐시 무효화 적용
          src={userInfo.profile_image ? `http://everion.store${userInfo.profile_image}?timestamp=${new Date().getTime()}` : defaultProfile}
          alt="profile img"
          onClick={() => profileInputRef.current.click()}
          style={{ cursor: "pointer" }}
        />
        <input type="file" ref={profileInputRef} style={{ display: "none" }} onChange={handleProfileChange} />
      </S.Info>
      <S.School>
        {schoolVerified === "approved" ? (
          <S.SchoolName>
            내 학교
            <S.SchoolBadge>멋사대학교</S.SchoolBadge>
          </S.SchoolName>
        ) : schoolVerified === "pending" ? (
          <S.SchoolVerify>
            <S.Guide>처리가 진행 중입니다</S.Guide>
          </S.SchoolVerify>
        ) : schoolVerified === "rejected" ? (
          <S.SchoolVerify>
            <S.Guide>인증이 거부되었습니다</S.Guide>
          </S.SchoolVerify>
        ) : (
          <S.SchoolVerify>
            <S.Guide onClick={handleFileClick}>
              학교와 직위를 인증할 수 있는 서류 첨부해주세요!
              <S.UploadIcon>
                <img src={upload} alt="upload icon" />
              </S.UploadIcon>
            </S.Guide>
            <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} />
            <button onClick={submitSchoolVerification}>제출하기</button>
          </S.SchoolVerify>
        )}
      </S.School>
      <S.Mypost>
        <S.Post>
          <S.PostImg src={myPost} />
          <Link to="/myPost">
            <S.MypostTitle>내가 쓴 글</S.MypostTitle>
          </Link>
        </S.Post>
        <S.Comment>
          <S.PostImg src={myComment} />
          <Link to="/myComment">
            <S.MypostTitle>댓글 단 글</S.MypostTitle>
          </Link>
        </S.Comment>
        <S.Scrap>
          <S.PostImg src={myScrap} />
          <Link to="/myScrap">
            <S.MypostTitle>스크랩</S.MypostTitle>
          </Link>
        </S.Scrap>
      </S.Mypost>
      <S.User>
        <S.Btn onClick={handleLogout}>로그아웃</S.Btn>
        <S.Btn onClick={handleDeleteAccount}>회원탈퇴</S.Btn>
      </S.User>
      <Footer />
    </S.Wrapper>
  );
};

export default MyPage;
