// 글 작성 박스

import * as S from "./PostingBox.styled";
import React, { useState } from "react";
import photo from "@assets/icons/photo.svg";

export const PostingBox = () => {
  const [previews, setPreviews] = useState([]); // 여러 이미지 URL을 배열로 저장

  // 파일 선택 시 실행되는 함수
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files); // 선택된 파일을 배열로 변환
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setPreviews(imageUrls); // 미리보기 URL 배열로 설정
  };

  return (
    <S.Wrapper>
      <S.Title type="text" placeholder="제목을 입력해주세요." />

      <S.ContentWrapper>
        <S.Content placeholder="내용을 입력해주세요" />

        <S.ImageWrapper>
          <S.PreviewsWrapper $isSingle={previews.length === 1}>
            {previews.map((src, index) => (
              <S.ImagePreview key={index} src={src} alt={`미리보기 ${index + 1}`} />
            ))}
          </S.PreviewsWrapper>
        </S.ImageWrapper>
      </S.ContentWrapper>

      <S.BottomWrap>
        <S.Check>
          <S.CheckBox type="checkbox"></S.CheckBox>
          <S.CheckLabel htmlFor="check">익명</S.CheckLabel>
        </S.Check>

        <S.InputImg $img={photo}>
          <S.Input type="file" accept="image/*" multiple onChange={handleImageChange} />
        </S.InputImg>
      </S.BottomWrap>
    </S.Wrapper>
  );
};
