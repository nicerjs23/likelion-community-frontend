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
`;

export const Content = styled.div`
  /* border: solid 1px pink; */
  display: flex;
  justify-content: space-between;
  width: 87.5%;
  gap: 9px; //이미지와 글씨사이 간격
`;

export const cardOpenIcon = styled.img`
  display: flex;
  width: 80px;
  height: 86.25px;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  padding: 10px 0; /* 위아래로 10px padding 설정 */
  box-sizing: border-box; /* padding이 요소의 크기 내에서 적용되도록 설정 */
  /* border: 1px solid blue; */

  .InfoDisplay {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
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
