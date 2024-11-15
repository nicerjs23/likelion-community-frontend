// 게시글 상세

import * as S from "./Content.styled";
import React, { useState, useEffect } from "react";
import profileLion from "@assets/icons/profileLion.svg";
import axiosInstance from "@apis/axiosInstance";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken";
import { useNavigate } from "react-router-dom";

export const Content = ({
  id,
  title, 
  body, 
  images, 
  likes_count, 
  scraps_count, 
  time, 
  writer, 
  anonymous, 
  username
}) => {
  
  useFetchCsrfToken();

  const navigate = useNavigate();

  const getTime = (time) => {
    const date=new Date(time);
    const now = new Date();
    const elapseTime = Math.floor((now - date) / (1000 * 60));

    if (elapseTime < 60) return `${elapseTime}분 전`;
    if (elapseTime < 1440) return `${Math.floor(elapseTime / 60)}시간 전`;
    return `${Math.floor(elapseTime / 1440)}일 전`;
}

const elapseTime = getTime(time);

const user = anonymous ? '익명' : writer;

  const [liked, setLiked] = useState(false);
  const [scrapped, setScrapped] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleScrapClick = () => {
    setScrapped(!scrapped);
  };

  // 게시글 삭제
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/post/mainboard/${id}/`);
      console.log('게시글이 성공적으로 삭제되었습니다')
      navigate(-1);
    } catch(error) {
      console.log('게시글 삭제 실패:',error);
    }
  }

  // 내가 작성자인지 확인
  const [myUsername, setMyUsername] = useState('');

  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/mypage/");
      console.log("user Response", response.data);

      if (response.data.user_info) {
          const myUsername = response.data.user_info.username;
          console.log('나의 username:',myUsername);
          setMyUsername(myUsername);

      } else {
        console.log("사용자 정보가 존재하지 않습니다.");
      }
    } catch (e) {
      console.error("error", e);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const isAuthor = myUsername === username;

  return (
    <S.PostWrap>
      <S.User>
        <S.Writter>
          <S.ProfileImg src={profileLion}></S.ProfileImg>
          <S.Text>
            <S.Id>{user}</S.Id>
            <S.Time>{elapseTime}</S.Time>
          </S.Text>
        </S.Writter>
        {isAuthor && (
        <S.ModifyWrap>
          <S.Modify>수정 </S.Modify>|<S.Delete onClick={handleDelete}> 삭제</S.Delete>
        </S.ModifyWrap>          
        )}
      </S.User>
      <S.Title>{title}</S.Title>
      <S.Content>{body}</S.Content>
      <S.ImgWrap>
        {images && images.length > 0 
        && images.map((imageObj, index) => (
          <S.Img key={index} src={imageObj.image} alt={`Post Image ${index}`} />
        ))}
      </S.ImgWrap>
      <S.Button>
        <S.Like onClick={handleLikeClick} liked={liked}>
          추천 <span>{liked ? likes_count+1 : likes_count}</span>
        </S.Like>
        <S.Scrap onClick={handleScrapClick} scrapped={scrapped}>
          {scrapped ? "스크랩 취소 " : "스크랩 "}
          <span>{scrapped ? scraps_count + 1 : scraps_count}</span>
        </S.Scrap>
      </S.Button>
    </S.PostWrap>
  );
};
