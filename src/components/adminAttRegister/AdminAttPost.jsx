//운영진 출석등록 글쓰기 박스 컴포넌트
import React, { useState } from "react";
import * as S from "./AdminAttPost.styled.js";
import { Dropdown } from "@components/adminAtt/Dropdown.jsx";
import postIcon from "@assets/icons/postIcon.svg";
import FileUpload from "@components/adminAttRegister/FileUpload.jsx";
import Calendar from "@components/adminAttRegister/Calendar.jsx";

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
  const [lateTime, setLocalLateTime] = useState("");
  const [absentTime, setLocalAbsentTime] = useState("");

  // 유효성 검사 함수
  const validateTimeValues = () => {
    const late = parseInt(lateTime, 10);
    const absent = parseInt(absentTime, 10);

    // 숫자 범위 유효성 검사
    if (
      (lateTime && (isNaN(late) || late < 0 || late > 60)) ||
      (absentTime && (isNaN(absent) || absent < 0 || absent > 60))
    ) {
      alert("0에서 60 사이의 숫자를 입력해 주세요.");
      setLocalLateTime("");
      setLocalAbsentTime("");
      setLateTime(""); // 부모 컴포넌트로 전달
      setAbsentTime(""); // 부모 컴포넌트로 전달
    } else if (absent <= late && absentTime && lateTime) {
      // 지각 기준과 결석 기준 비교
      alert("결석 시간은 지각 시간보다 커야 합니다.");
      setLocalLateTime("");
      setLocalAbsentTime("");
      setLateTime(""); // 부모 컴포넌트로 전달
      setAbsentTime(""); // 부모 컴포넌트로 전달
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
          <Calendar setDate={setDate} />
          <S.InputTime
            type="time"
            onChange={(e) => setTime(e.target.value)}
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
