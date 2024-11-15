//출석 글 카드 스타일
import styled from "styled-components";

// export const Content = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 110px;
  /* aspect-ratio: 320 / 110; */
  justify-content: center;
  align-items: center;
  background-color: ${({ $isOpen }) =>
    $isOpen ? "#FFF3EA" : "#FFFFFF"}; //1일때가 진행중
  border: ${({ $isOpen, theme }) =>
    $isOpen ? `solid 1.5px ${theme.colors.mainColor}` : "none"};
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);

  padding: 20px;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: 1px solid blue;

  .InfoDisplay {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;
export const DisplayBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 34px;
  border-radius: 32px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  font-size: 16px;
  color: ${({ status }) => {
    switch (status) {
      case "출석":
        return "#067600";
      case "지각":
        return "#C07D00";
      case "결석":
        return "#760400";
      default:
        return "#000000"; // 기본 색상
    }
  }};
  background-color: ${({ status }) => {
    switch (status) {
      case "출석":
        return "#a2ff9a";
      case "지각":
        return "#FFF39A";
      case "결석":
        return "#FF9A9A";
      default:
        return "#FFFFFF"; // 기본 배경색
    }
  }};
`;
export const InfoTextBox = styled.div`
  display: flex;
  gap: 4px;
`;
export const InfoIcon = styled.img`
  display: flex;
  width: 16px;
  height: 16px;
`;
export const InfoText = styled.div`
  display: flex;
  font-size: 14px;
  color: #767676;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`;

export const TitleText = styled.div`
  width: 100%;
  display: block;
  font-size: 16px;
  color: #111111;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  overflow: hidden; /* 넘치는 내용 숨기기 */
  white-space: nowrap; /* 텍스트가 줄 바꿈되지 않도록 설정 */
  text-overflow: ellipsis; /* 초과 텍스트를 ...으로 표시 */
`;
