//react-datepicker 사용
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale"; // date-fns의 한국어 로케일 가져오기
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import calendarIcon from "@assets/icons/calendar.svg";

registerLocale("ko", ko);

// 글로벌 스타일 정의
const GlobalStyle = createGlobalStyle`
  .react-datepicker-popper {
    left: 30px !important; /* 원하는 위치로 수정 */
  }
`;

const Calendar = ({ setDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDate(date); // 부모 컴포넌트로 선택한 날짜 전달
  };
  return (
    <>
      <GlobalStyle /> {/* 글로벌 스타일 적용 */}
      <DatePickerWrapper>
        <StyledDatePicker
          locale="ko" // 한국어 로케일 설정
          dateFormat="yyyy.MM.dd" // 날짜 형태
          shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
          minDate={new Date("2000-01-01")} // 2000년 1월 1일 이전 날짜 선택 불가
          selected={selectedDate}
          onChange={handleDateChange} // 날짜 변경 핸들러
        />
        <Icon src={calendarIcon} alt="Calendar Icon" />
      </DatePickerWrapper>
    </>
  );
};

// Wrapper 스타일링
const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 50%;
`;

// Styled-components로 DatePicker 스타일링
const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  height: 33px;
  border: 1px solid #cccccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  color: #999999;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  font-size: 14px;
  padding: 0 35px 0 5px; // 오른쪽 패딩 추가해서 아이콘과 겹치지 않게
  box-sizing: border-box;
  cursor: pointer;

  &:focus {
    border-color: #5b5b5b; /* 원하는 색상으로 변경 */
    outline: none; /* 기본 outline 제거 */
  }
`;

// 아이콘 스타일링
const Icon = styled.img`
  position: absolute;
  right: 10px; // 아이콘을 오른쪽 끝에 배치
  height: 20px;
  width: 20px;
  pointer-events: none; // 아이콘이 클릭을 방해하지 않도록 설정
`;

export default Calendar;
