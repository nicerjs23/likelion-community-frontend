//출석 글 카드
import * as S from "./AttCard.styled";
import cardOpen from "@assets/icons/cardOpen.png";
import cardClose from "@assets/icons/cardClose.png";
import dateIcon from "@assets/icons/dateIcon.svg";
import pingIcon from "@assets/icons/pingIcon.svg";
export function AttCard({
  isOpen,
  onClick,
  date,
  place,
  time,
  title,
  track,
}) {
  return (
    <S.Wrapper $isOpen={isOpen} onClick={onClick}>
      <S.Content>
        <S.TextContent>
          <div className="InfoDisplay">
            <S.InfoTextBox>
              <S.InfoIcon src={dateIcon} alt="dateIcon" />
              <S.InfoText>
                {date} {time}~
              </S.InfoText>
            </S.InfoTextBox>
            <S.InfoTextBox>
              <S.InfoIcon src={pingIcon} alt="pingIcon" />
              <S.InfoText>{place}</S.InfoText>
            </S.InfoTextBox>
          </div>
          <S.TitleText>
            [{track}] {title}
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
