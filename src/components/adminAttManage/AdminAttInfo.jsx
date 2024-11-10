// 운영진 출석 정보 확인카드 컴포넌트
import * as S from "./AdminAttInfo.styled";
import list from "@assets/icons/list.svg";
import date from "@assets/icons/date.svg";
import location from "@assets/icons/location.svg";
import image from "@assets/icons/image.svg";

export const AdminAttInfo = () => {
  return (
    <S.Wrapper>
      <S.Top>
        <S.TopImg src={list} />
      </S.Top>
      <S.Mid>
        <S.Gap5>
          <S.Date>
            <S.DateImg src={date} />
            <span>2024년 10월 19일 오후 18:30~</span>
          </S.Date>
          <S.Location>
            <S.LocationImg src={location} />
            신공학관 5147
          </S.Location>
          <S.Title>[백엔드] 9주차 세션 배포 쉽게하기</S.Title>
        </S.Gap5>
        <S.Detail>
          늦지 않게 와주세요~ 일찍 오신분들은 5143에서 대기해주시면
          됩니다.
        </S.Detail>

        <S.FileDiv>
          <S.FileName>9주차 배포자료.pdf</S.FileName>
          <img src={image} alt="filen name" />
        </S.FileDiv>
      </S.Mid>
    </S.Wrapper>
  );
};

export default AdminAttInfo;
