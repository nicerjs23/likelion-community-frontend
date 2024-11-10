//운영진 출석등록페이지 어드민 네임태그 컴포넌트

import styled from "styled-components";

export const AdminNameCard = ({ adminName, adminYear }) => {
  return (
    <Wrapper>
      <Content>
        <Profile />
        <InfoText>
          담당자: {adminName} | <span> {adminYear}기 운영진</span>
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

const Profile = styled.div`
  display: flex;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: lightgray;
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
