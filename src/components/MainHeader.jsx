// 메인 페이지에 사용할 헤더

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "@assets/images/orangeLogo.png";
import defaultProfile from "@assets/images/ExImg.svg";

import { Link } from "react-router-dom";
import axiosInstance from "@apis/axiosInstance";

export const MainHeader = ({ title }) => {
  const [profileImage, setProfileImage] = useState(defaultProfile);

  // 사용자 정보 가져오기
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axiosInstance.get("/mypage/");
        const userProfileImage = response.data.user_info.profile_image;
        setProfileImage(userProfileImage ? `http://everion.store${userProfileImage}` : defaultProfile);
      } catch (error) {
        console.error("사용자 정보를 불러오는 중 오류가 발생했습니다:", error);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <Wrapper>
      <Content>
        <Left>
          <img src={logo} alt="logo" />
          <Title>{title}</Title>
        </Left>
        <Right>
          <Link to="/myPage">
            {/* <Profile src="" alt=" profile img" /> */}
            <Profile src={profileImage || defaultProfile} alt="profile img" />
          </Link>
        </Right>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 540px;
  height: 7.25vh;
  background-color: #f1f3f5;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

const Content = styled.div`
  width: 88.89%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  color: #ff7710;
  font-family: ${({ theme }) => theme.fonts.PretendardExtraBold["font-family"]};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 24px;

  img {
    height: 34px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  gap: 9px;

  img {
    cursor: pointer;
  }
`;

const Profile = styled.img`
  border-radius: 50%;
  border: 1px solid black;
  width: 28px;
  height: 28px;
  object-fit: cover;
`;
