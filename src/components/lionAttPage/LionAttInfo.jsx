// 운영진 출석 정보 확인카드 컴포넌트
import * as S from "@components/adminAttManage/AdminAttInfo.styled";
import { useState } from "react";
import list from "@assets/icons/list.svg";
import dateIcon from "@assets/icons/date.svg";
import location from "@assets/icons/location.svg";
import image from "@assets/icons/image.svg";
export const LionAttInfo = ({
  date,
  time,
  place,
  track,
  title,
  description,
  file,
}) => {
  // 파일 이름 추출 함수
  const getFileName = (fileUrl) => {
    return fileUrl ? fileUrl.split("/").pop() : "파일이 없습니다.";
  };

  return (
    <S.Wrapper>
      <S.Top>
        <S.TopImg src={list} />
      </S.Top>
      <S.Mid>
        <S.Gap5>
          <S.Date>
            <div>
              <S.DateImg src={dateIcon} />
              <span>
                {date} {time}~
              </span>
            </div>
          </S.Date>
          <S.Location>
            <S.LocationImg src={location} />
            {place}
          </S.Location>
          <S.Title>
            [{track}] {title}
          </S.Title>
        </S.Gap5>
        <S.Detail>{description}</S.Detail>

        {file && (
          <S.FileDiv>
            <a href={file} target="_blank" rel="noopener noreferrer">
              <S.FileName>{getFileName(file)}</S.FileName>
            </a>
            <img src={image} alt="file icon" />
          </S.FileDiv>
        )}
      </S.Mid>
    </S.Wrapper>
  );
};

export default LionAttInfo;
