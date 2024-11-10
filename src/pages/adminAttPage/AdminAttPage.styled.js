import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 7.25vh; //헤더 높이만큼 띄우기
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.mainColor}; */

  /* font-family: ${({ theme }) =>
    theme.fonts.PretendardThin["font-family"]}; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 88.89%;
  margin: 0 auto;
  gap: 16px;
  /* border: solid 1px green; */
`;

export const ActionBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`;

//글쓰기 버튼

export const WriteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 33px;
  border-radius: 8px;
  border: 1.5px solid #ff7710;
  background-color: #fff3ea;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);

  gap: 4px; //아이콘과 글씨사이띄우기

  font-size: 14px;
  color: ${({ theme }) => theme.colors.mainColor};

  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`;
//펜아이콘
export const AdminPenIcon = styled.img`
  display: flex;
  width: 16px;
  height: 16px;
`;
export const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
