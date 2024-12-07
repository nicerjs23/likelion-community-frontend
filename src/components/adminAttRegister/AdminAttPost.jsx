import React, { useState, useEffect } from "react";
import * as S from "./AdminAttPost.styled.js";
import { Dropdown } from "@components/adminAtt/Dropdown.jsx";
import postIcon from "@assets/icons/postIcon.svg";
import FileUpload from "@components/adminAttRegister/FileUpload.jsx";
import Calendar from "@components/adminAttRegister/Calendar.jsx";
import { format } from "date-fns"; // 날짜 포맷을 위해 date-fns 라이브러리 사용

export const AdminAttPost = ({
  setDropdownValue,
  setTitle,
  setDate,
  setTime,
  setPlace,
  setBody,
  setFile,
  setLateTime,
  setAbsentTime,
}) => {
  // 오늘 날짜와 현재 시간을 초기값으로 설정
  const today = new Date();
  const formattedDate = format(today, "yyyy-MM-dd"); // 오늘 날짜
  const formattedTime = format(today, "HH:mm"); // 현재 시간

  const [localDate, setLocalDate] = useState(formattedDate); // 로컬 날짜 상태
  const [localTime, setLocalTime] = useState(formattedTime); // 로컬 시간 상태
  const [lateTime, setLocalLateTime] = useState(""); // 지각 기준 시간
  const [absentTime, setLocalAbsentTime] = useState(""); // 결석 기준 시간

  // 초기값을 부모 컴포넌트에 전달
  useEffect(() => {
    setDate(localDate); // 초기 날짜 전달
    setTime(localTime); // 초기 시간 전달
  }, []); // 빈 배열로 설정하여 최초 렌더링 시 한 번만 실행

  // 날짜 변경 핸들러
  const handleDateChange = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    setLocalDate(formattedDate); // 로컬 상태 업데이트
    setDate(formattedDate); // 부모 컴포넌트에 전달
  };

  // 시간 변경 핸들러
  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setLocalTime(newTime); // 로컬 상태 업데이트
    setTime(newTime); // 부모 컴포넌트에 전달
  };

  // 유효성 검사 함수
  const validateTimeValues = () => {
    const late = parseInt(lateTime, 10);
    const absent = parseInt(absentTime, 10);

    if (
      (lateTime && (isNaN(late) || late < 0 || late > 60)) ||
      (absentTime && (isNaN(absent) || absent < 0 || absent > 60))
    ) {
      alert("0에서 60 사이의 숫자를 입력해 주세요.");
      setLocalLateTime("");
      setLocalAbsentTime("");
      setLateTime(""); // 부모 컴포넌트에 전달
      setAbsentTime(""); // 부모 컴포넌트에 전달
    } else if (absent <= late && absentTime && lateTime) {
      alert("결석 시간은 지각 시간보다 커야 합니다.");
      setLocalLateTime("");
      setLocalAbsentTime("");
      setLateTime(""); // 부모 컴포넌트에 전달
      setAbsentTime(""); // 부모 컴포넌트에 전달
    }
  };

  const handleLateTimeChange = (e) => {
    const value = e.target.value;
    setLocalLateTime(value);
    setLateTime(value); // 부모 컴포넌트로 전달
  };

  const handleAbsentTimeChange = (e) => {
    const value = e.target.value;
    setLocalAbsentTime(value);
    setAbsentTime(value); // 부모 컴포넌트로 전달
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderIcon src={postIcon} alt="HeaderIcon" />
      </S.Header>
      <S.InputSection>
        <S.InputSectionGap>
          <Dropdown
            props={{
              data: [
                "전체트랙",
                "프론트엔드",
                "백엔드",
                "기획/디자인",
              ],
            }}
            onChange={(value) => setDropdownValue(value)}
          />
          <S.InputTitle
            placeholder="제목을 입력해 주세요"
            onChange={(e) => setTitle(e.target.value)}
          />
        </S.InputSectionGap>
        <S.InputSectionGap $gap10>
          <Calendar
            setDate={handleDateChange}
            value={localDate} // 로컬 상태로 관리된 날짜 표시
          />
          <S.InputTime
            type="time"
            onChange={handleTimeChange} // 시간 변경 핸들러 연결
            value={localTime} // 로컬 상태로 관리된 시간 표시
          />
        </S.InputSectionGap>
        <S.InputSectionGap>
          <S.InputPlace
            placeholder="강의 장소를 입력해 주세요."
            onChange={(e) => setPlace(e.target.value)}
          />
        </S.InputSectionGap>
        <S.InputSectionGap $gap10>
          <S.TimeDiv>
            <S.TimeText>결석기준(분):</S.TimeText>
            <S.AbsentTime
              type="number"
              placeholder="ex 30"
              onChange={handleAbsentTimeChange}
              value={absentTime}
              min="0"
              max="60"
              onBlur={validateTimeValues} // 입력 필드를 벗어날 때 유효성 검사
            />
          </S.TimeDiv>
          <S.TimeDiv>
            <S.TimeText>지각기준(분): </S.TimeText>
            <S.LateTime
              type="number"
              placeholder="ex 10"
              onChange={handleLateTimeChange}
              value={lateTime}
              min="0"
              max="60"
              onBlur={validateTimeValues} // 입력 필드를 벗어날 때 유효성 검사
            />
          </S.TimeDiv>
        </S.InputSectionGap>
        <S.TextareaBody
          placeholder="내용을 입력해 주세요"
          onChange={(e) => setBody(e.target.value)}
        />
        <FileUpload setFile={setFile} />
      </S.InputSection>
    </S.Wrapper>
  );
};
