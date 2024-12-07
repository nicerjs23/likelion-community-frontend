// 글 작성 박스

import * as S from "./PostingBox.styled";
import React, { useState, useEffect } from "react";
import photo from "@assets/icons/photo.svg";
import { PostingBtn } from "@components/post/PostingBtn";

export const PostingBox = ({ post, setPost, onSubmit }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(post.images || []);
  }, [post]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) => {
        const preview = URL.createObjectURL(file);
        return { file, preview };
      });
      setPost((prev) => ({
        ...prev,
        images: [...prev.images, ...newImages],
      }));
    }
  };

  useEffect(() => {
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image.preview));
    };
  }, [images]);

  const handleSubmit = () => {
    onSubmit(post);
  };

  return (
    <S.Wrapper>
      <S.Title 
        type="text" 
        placeholder="제목을 입력해주세요." 
        value={post.title} 
        onChange={(e) => setPost((prev) => ({ ...prev, title: e.target.value }))}
      />
      <S.ContentWrapper>
        <S.Content
          placeholder="내용을 입력해주세요"
          value={post.body}
          onChange={(e) => setPost((prev) => ({ ...prev, body: e.target.value }))}
        />
        <S.ImageWrapper>
          <S.PreviewsWrapper>
            {images.map((image,index) => (
              <S.ImagePreview
                key={index}
                src={image.preview || image.image}
                alt={`post img ${index}`}
              />
            ))}
          </S.PreviewsWrapper>
        </S.ImageWrapper>
      </S.ContentWrapper>
      <S.BottomWrap>
        <S.Check>
          <S.CheckBox 
            type="checkbox"
            checked={post.anonymous}
            onChange={(e) => setPost((prev) => ({ ...prev, anonymous: e.target.checked }))}
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
