//운영진 출석등록페이지 어드민 네임태그 컴포넌트

import styled from "styled-components";

export const AdminNameCard = ({
  profile_image,
  nickname,
  membership_term,
}) => {
  return (
    <Wrapper>
      <Content>
        <Profile $profileImage={profile_image} />
        <InfoText>
          담당자: {nickname} |<span> {membership_term}기 운영진</span>
        </InfoText>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;

  align-items: center;
  width: 100%;
  height: 70px;
  border-radius: 32px;
  background-color: #ffffff;
  padding: 12px;
  box-sizing: border-box;
`;
const Content = styled.div`
  display: flex;

  gap: 15px;
`;

// prop을 필터링하여 DOM에 전달되지 않도록 처리
const Profile = styled.div.attrs(({ $profileImage }) => ({
  style: {
    backgroundImage: $profileImage ? `url(${$profileImage})` : "none",
  },
}))`
  display: flex;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: lightgray;
  background-size: cover;
  background-position: center;
`;

const InfoText = styled.div`
  display: flex;
  align-items: center;
  color: #111111;
  font-size: 16px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  span {
    margin-left: 3px;
    font-size: 14px;
    color: #ff7710;
  }
`;
