import React from 'react';
import * as S from './SchAllBoardPage.styled'
import { Header } from '@components/Header'
import { Board as SchBoard } from '@components/schBoard/Board'
import { WriteBtn } from '@components/schBoard/WriteBtn'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axiosInstance from "@apis/axiosInstance";

export const SchNotiBoardPage = () => {
  const [posts, setPost] = useState([]);

  const [isStaff, setIsStaff] = useState(false); //운영진유무 상태관리
  // API 호출 및 is_staff 값 가져오기
  useEffect(() => {
    const fetchIsStaff = async () => {
      try {
        const response = await axiosInstance.get("/attendance/main/");
        setIsStaff(response.data.user_info.is_staff);
      } catch (error) {
        console.error("Error fetching is_staff:", error);
      }
    };

    fetchIsStaff();
  }, []);
  console.log("운영진이니?:", isStaff);

  
  // 게시물 가져오기
  const fetchPost = async () => {
    try {
      const response = await axiosInstance.get('/post/schoolnoticeboard/');
      console.log("학교 공지사항 데이터:", response.data);
      setPost(response.data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);
  

    return (
        <S.Wrapper>
            <Header title='공지사항' />
            <S.Noti>📢  중앙해커톤 12/6일 개최! </S.Noti>
            <S.Content>
              {posts.map((post) => (
                <Link to={`/schNotiPostPage/${post.id}`} style={{ width: "100%" }} key={post.id}>
                  <SchBoard 
                    track={null}
                    title={post.title}
                    body={post.body}
                    time={post.time}
                    anonymous={post.anonymous}
                    writer={post.writer.nickname}
                    comments_count={post.comments_count}
                    scraps_count={post.scraps_count}
                    images={post.image}
                  />
                </Link>
              ))}
            </S.Content>
            {isStaff && 
              <Link to='/SchNotiPosting'>
                  <WriteBtn />
              </Link>
            }
        </S.Wrapper>
    )
}

export default SchNotiBoardPage;
