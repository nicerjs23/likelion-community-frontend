// 게시글 상세

import * as S from "../post/Content.styled";
import React, { useState, useEffect } from "react";
import profileLion from "@assets/icons/profileLion.svg";
import axiosInstance from "@apis/axiosInstance";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken";
import { useNavigate } from "react-router-dom";

export const Content = ({ id, title, body, images, likes_count, scraps_count, time, writer, anonymous, username, boardTitle, profileImg }) => {
  useFetchCsrfToken();

  const navigate = useNavigate();

  const getTime = (time) => {
    const date = new Date(time);
    const now = new Date();
    const elapseTime = Math.floor((now - date) / (1000 * 60));

    if (elapseTime < 0) return `0분 전`;
    if (elapseTime < 60) return `${elapseTime}분 전`;
    if (elapseTime < 1440) return `${Math.floor(elapseTime / 60)}시간 전`;
    return `${Math.floor(elapseTime / 1440)}일 전`;
  };

  const elapseTime = getTime(time);

  const user = anonymous ? "익명" : writer;
  const [liked, setLiked] = useState(false);
  const [scrapped, setScrapped] = useState(false);

  useEffect(() => {
    const fetchScrapStatus = async () => {
      try {
        const response = await axiosInstance.post(`/post/mainboard/${id}/scraps/`);
        console.log("초기 스크랩 상태:", response.data.is_scraped);
        setScrapped(response.data.is_scraped);
      } catch (error) {
        console.error("스크랩 상태 가져오기 실패:", error);
      }
    };

    fetchScrapStatus();
  }, [id]);

  const handleScrap = async () => {
    try {
      const response = await axiosInstance.post(`/post/mainboard/${id}/scraps/`);
      console.log("스크랩 처리 성공:", response.data);
      setScrapped(response.data.is_scraped);
    } catch (error) {
      console.error("스크랩 처리 실패:", error);
    }
  };

  // 초기 좋아요 상태 가져오기
  useEffect(() => {
    const fetchLikeStatus = async () => {
      try {
        const response = await axiosInstance.post(`/post/mainboard/${id}/likes/`);
        action: "fetch_status", // 서버에서 요청 상태를 처리할 수 있는 키워드 전달 (선택 사항)
          console.log("초기 좋아요 상태:", response.data);
        setLiked(response.data.is_liked); // 서버에서 `is_liked` 값 받아오기
      } catch (error) {
        console.error("좋아요 상태 가져오기 실패:", error);
      }
    };

    fetchLikeStatus();
  }, [id]);

  // 좋아요 상태 토글
  const handleLike = async () => {
    try {
      const response = await axiosInstance.post(`/post/mainboard/${id}/likes/`);
      console.log("좋아요 처리 성공:", response.data);
      // 서버 응답 데이터로 상태 업데이트
      setLiked(response.data.is_liked); // `is_liked` 값 업데이트
    } catch (error) {
      console.error("좋아요 처리 실패:", error);
    }
  };

  // 게시글 삭제
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/post/mainboard/${id}/`);
      console.log("게시글이 성공적으로 삭제되었습니다");
      navigate(-1);
    } catch (error) {
      console.log("게시글 삭제 실패:", error);
    }
  };

  // 내가 작성자인지 확인
  const [myUsername, setMyUsername] = useState("");

  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/mypage/");
      console.log("user Response", response.data);

      if (response.data.user_info) {
        const myUsername = response.data.user_info.username;
        console.log("나의 username:", myUsername);
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

  // 게시글 수정
  const postUpdate = () => {
    const postUpdateUrl = {
      "자유게시판": "/DefaultPostingPage",
      "백엔드 게시판": "/bePostingPage",
      "프론트엔드 게시판": "/fePostingPage",
      "기획/디자인 게시판": "/pmPostingPage",
      "아기사자게시판": "/lionPostingPage",
      "참여게시판": "/joinPostingPage",
      "이벤트/공지게시판": "/notiPostingPage",
    };
    const url = postUpdateUrl[boardTitle];
    navigate(url, {
      state: { id, title, body, images, boardTitle },
    });
  };

  return (
    <S.PostWrap>
      <S.User>
        <S.Writter>
          <S.ProfileImg
            src={!anonymous && profileImg ? profileImg : profileLion}
            alt="profile img"
          />
          <S.Text>
            <S.Id>{user}</S.Id>
            <S.Time>{elapseTime}</S.Time>
          </S.Text>
        </S.Writter>
        {isAuthor && (
          <S.ModifyWrap>
            <S.Modify onClick={postUpdate}>수정 </S.Modify>|<S.Delete onClick={handleDelete}> 삭제</S.Delete>
          </S.ModifyWrap>
        )}
      </S.User>
      <S.Title>{title}</S.Title>
      <S.Content>{body}</S.Content>
      <S.ImgWrap>
        {images &&
          images.length > 0 &&
          images.map((imageObj, index) => <S.Img key={index} src={imageObj.prview || imageObj.image} alt={`Post Image ${index}`} />)}
      </S.ImgWrap>
      <S.Button>
        <S.Like onClick={handleLike} liked={liked}>
          추천 <span>{liked ? likes_count + 1 : likes_count}</span>
        </S.Like>
        <S.Scrap onClick={handleScrap} scrapped={scrapped}>
          {scrapped ? "스크랩 취소 " : "스크랩 "}
          <span>{scrapped ? scraps_count + 1 : scraps_count}</span>
        </S.Scrap>
      </S.Button>
    </S.PostWrap>
  );
};
