import React from 'react';
import * as S from './SchAllBoardPage.styled'
import { Header } from '@components/Header'
import { Board as SchBoard } from '@components/schBoard/Board'
import { WriteBtn } from '@components/schBoard/WriteBtn'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axiosInstance from "@apis/axiosInstance";

export const SchAllBoardPage = () => {
  const [posts, setPost] = useState([]);
  
  // 게시물 가져오기
  const fetchPost = async () => {
    try {
      const response = await axiosInstance.get('/post/schoolboard/');
      console.log("학교 전체 게시판 데이터:", response.data);
      setPost(response.data);
    } catch (error) {
      console.log("error:", error);
      setError("게시물을 불러오는 데 실패했습니다.");
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);
  

    return (
        <S.Wrapper>
            <Header title='전체 게시판' />
            <S.Noti>📢  중앙해커톤 12/6일 개최! </S.Noti>
            <S.Content>
              {posts.map((post, index) => (
                <Link to={`/schDefaultPostPage/${post.id}`} style={{ width: "100%" }}>
                  <SchBoard 
                    key={index}
                    title={post.title}
                    body={post.body}
                  />
                </Link>
              ))}
            </S.Content>
            <Link to='/'>
                <WriteBtn />
            </Link>
        </S.Wrapper>
    )
}

export default SchAllBoardPage
