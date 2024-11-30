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
import useFetchCsrfToken from "@hooks/useFetchCsrfToken";
import axiosInstance from "@apis/axiosInstance";

export const MyPage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    profile_image: "",
    membership_term: "",
    role: "",
    school_name: "",
    track: "",
  });

  const [schoolVerified, setSchoolVerified] = useState("");
  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [verificationPhotos, setVerificationPhotos] = useState([]);

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
          is_staff: response.data.is_staff,
          school_name: response.data.details.school_name,
          track: response.data.details.track,
        });

        console.log("학교 인증 상태: ", response.data.verification_status.school_status);
        setSchoolVerified(response.data.verification_status.school_status);
        setUploadedPhotos(response.data.verification_photos || []);
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
          setUserInfo((prevState) => ({
            ...prevState,
            profile_image: response.data.profile_image,
          }));
        })
        .catch((error) => {
          console.error("프로필 사진 변경 오류:", error);
          alert("프로필 사진 변경 중 오류가 발생했습니다.");
        });
    }
  };

  // 학교 인증 파일 선택 핸들러
  const handleFileChange = (e) => {
    setVerificationPhotos([...e.target.files]);
  };

  // 프로필 이미지 클릭 시 파일 선택 창 열기
  const handleProfileClick = () => {
    if (profileInputRef.current) {
      profileInputRef.current.click();
    } else {
      console.error("프로필 파일 입력 요소가 존재하지 않습니다.");
    }
  };

  // SchoolVerify 영역 클릭 시 파일 선택 창 열기
  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    } else {
      console.error("파일 입력 요소가 존재하지 않습니다.");
    }
  };

  // 학교 인증 요청 함수
  const submitSchoolVerification = async () => {
    if (schoolVerified === "pending" || schoolVerified === "approved") {
      alert("이미 학교 인증 요청이 처리 중이거나 완료되었습니다.");
      return;
    }

    console.log("학교 인증 요청 함수 실행"); // 디버깅용

    // 파일이 선택되었는지 확인
    if (verificationPhotos.length === 0) {
      alert("인증할 사진을 선택해주세요.");
      return;
    }

    // FormData 객체 생성 및 파일 추가
    const formData = new FormData();
    verificationPhotos.forEach((photo) => {
      formData.append("photos", photo); // 다중 파일 추가
    });

    // FormData에 포함된 데이터 확인 (디버깅용)
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      // Axios POST 요청 보내기
      const response = await axiosInstance.post("/mypage/verification/photos/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      alert("학교 인증이 제출되었습니다.");
      setUploadedPhotos(response.data.verification.verification_photos || []);
      setSchoolVerified("pending");
    } catch (e) {
      // 서버 에러 응답 확인
      if (e.response) {
        console.error("서버 응답 오류:", e.response.data);
      } else {
        console.error("학교 인증 오류:", e);
      }
      alert("학교 인증 중 오류가 발생했습니다.");
    }
  };

  // 서버로 파일 업로드
  const handleFileUpload = (e) => {
    const files = e.target.files; // 선택된 파일들

    if (!files.length) {
      alert("파일을 선택해주세요.");
      return;
    }

    // FormData 생성
    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("photos", file)); // 필드 이름 'photos'

    // 서버에 파일 업로드 요청
    axiosInstance
      .post("/mypage/verification/update_photos/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert("파일이 업로드되었습니다.");
        console.log("업로드 성공:", response.data);
      })
      .catch((error) => {
        console.error("파일 업로드 오류:", error);
        alert("파일 업로드 중 오류가 발생했습니다.");
      });
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
        await axiosInstance.delete("/signup/delete_user/");
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
            <S.Badge>
              {userInfo.membership_term}기 {userInfo.track && userInfo.track}
            </S.Badge>
            {userInfo.is_staff !== "none" && <S.Badge>{userInfo.is_staff === true ? "운영진" : "아기사자"}</S.Badge>}
            {/* {userInfo.track && <S.Track>{userInfo.track}</S.Track>} */}
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
          <S.SchoolInfo>
            <S.SchoolName>
              내 학교
              <S.SchoolBadge>{userInfo.school_name ? userInfo.school_name : "학교 없음"}</S.SchoolBadge>
            </S.SchoolName>
            <S.ModifyPhoto onClick={() => fileInputRef.current.click()}>수정</S.ModifyPhoto>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              multiple
              onChange={handleFileUpload} // 파일 선택 시 호출
            />
          </S.SchoolInfo>
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
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              multiple // 다중 파일 선택 활성화
              onChange={handleFileChange}
            />
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
