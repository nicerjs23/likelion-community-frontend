// 학교 질문게시판 목록 페이지

import React from 'react'
import * as S from './SchQnaBoardPage.styled'
import { Header } from '@components/Header'
import { Dropdown } from '@components/adminAtt/Dropdown'
import { Board as SchBoard } from '@components/schBoard/Board'
import { WriteBtn } from '@components/schBoard/WriteBtn'
import { Link } from 'react-router-dom'
import axiosInstance from '@apis/axiosInstance'
import { useState, useEffect } from 'react'

export const SchQnaBoardPage = () => {
    const [posts, setPost] = useState([]);

  // 게시물 가져오기
  const fetchPost = async () => {
    try {
      const response = await axiosInstance.get('/post/questionboard/');
      console.log("학교 질문 게시판 데이터:", response.data);
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
            <Header title='질문 게시판' />
            <S.Content>
              {posts.map((post, index) => (
                <SchBoard 
                  key={index}
                  title={post.title}
                  body={post.body}
                />
              ))}
            </S.Content>
            <Link to='/'>
                <WriteBtn />
            </Link>
        </S.Wrapper>
    )
}

export default SchQnaBoardPage
