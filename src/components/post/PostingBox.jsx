// 글 작성 박스

import * as S from "./PostingBox.styled";
import React, { useState, useEffect } from "react";
import photo from "@assets/icons/photo.svg";
import { PostingBtn } from "@components/post/PostingBtn";

export const PostingBox = ({ onSubmit }) => {
    
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [images, setImages] = useState([]);
  const [anonymous, setAnonymous] = useState(false);



  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files) {
      const newImages  = Array.from(files).map((file) => {
        const preview = URL.createObjectURL(file);
        return { file, preview };
      });
    setImages(preImages => [...preImages, ...newImages ]);
    }
  };

  useEffect(() => {
    // 컴포넌트 언마운트 시 객체 URL 해제
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image.preview));
    };
  }, [images]);

  const handleSubmit= () => {
    onSubmit({title, body, anonymous, images});
  }


  return (
    <S.Wrapper>
      <S.Title 
        type="text" 
        placeholder="제목을 입력해주세요." 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <S.ContentWrapper>
        <S.Content 
          placeholder="내용을 입력해주세요"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <S.ImageWrapper>
          <S.PreviewsWrapper>
            {images.map((image,index) => (
              <S.ImagePreview key={index} src={image.preview} alt={`post img ${index}`} />
            ))}
          </S.PreviewsWrapper>
        </S.ImageWrapper>
      </S.ContentWrapper>

      <S.BottomWrap>
        <S.Check>
          <S.CheckBox 
            type="checkbox"
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
          />
          <S.CheckLabel htmlFor="check">익명</S.CheckLabel>
        </S.Check>

        <S.InputImg $img={photo}>
          <S.Input 
            type="file" 
            accept="image/*" 
            multiple onChange={handleImageChange} 
          />
        </S.InputImg>
      </S.BottomWrap>
      <S.Button onClick={handleSubmit}>
          <PostingBtn />
      </S.Button>
    </S.Wrapper>
  );
};
