//출석 글 카드
import * as S from "./LionAttCard.styled";
import dateIcon from "@assets/icons/dateIcon.svg";
import pingIcon from "@assets/icons/pingIcon.svg";
export function LionAttCard({
  isOpen,
  onClick,
  date,
  place,
  time,
  title,
  track,
  status,
}) {
  return (
    <S.Wrapper $isOpen={isOpen == 1} onClick={onClick}>
      <S.Content>
        <S.DisplayBox>
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
          <S.Status status={status}>{status}</S.Status>
        </S.DisplayBox>
        <S.TitleText>
          [{track}] {title}
        </S.TitleText>
      </S.Content>
    </S.Wrapper>
  );
}
