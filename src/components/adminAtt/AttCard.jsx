//출석 글 카드
import * as S from "./AttCard.styled";
import cardOpen from "@assets/icons/cardOpen.png";
import cardClose from "@assets/icons/cardClose.png";
import dateIcon from "@assets/icons/dateIcon.svg";
import pingIcon from "@assets/icons/pingIcon.svg";
export function AttCard({ isOpen, onClick }) {
  return (
    <S.Wrapper $isOpen={isOpen} onClick={onClick}>
      <S.Content>
        <S.TextContent>
          <div className="InfoDisplay">
            <S.InfoTextBox>
              <S.InfoIcon src={dateIcon} alt="dateIcon" />
              <S.InfoText>2024년 10월 19일 18:30~</S.InfoText>
            </S.InfoTextBox>
            <S.InfoTextBox>
              <S.InfoIcon src={pingIcon} alt="pingIcon" />
              <S.InfoText>신공학관 5147</S.InfoText>
            </S.InfoTextBox>
          </div>
          <S.TitleText>
            [백엔드] 9주차 세션 배포 쉽게하기 긴제목
          </S.TitleText>
        </S.TextContent>
        <S.cardOpenIcon
          src={isOpen ? cardOpen : cardClose} // 아이콘 변경
          alt="cardIcon"
        />
      </S.Content>
    </S.Wrapper>
  );
}
