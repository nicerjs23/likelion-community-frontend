//아기사자 출석페이지 스타일
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

export const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LionAttScore = styled.div`
  margin-top: 15px;
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
`;

export const ScoreContent = styled.div`
  display: flex;
  gap: 60px;
`;

export const ScoreText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #767676;
  font-size: 16px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  .score {
    color: #000000;
    font-size: 22px;
  }
`;
