// 아기사자 게시판
import React, { useState, useEffect } from 'react'
import * as S from './BoardPage.styled'
import { Header } from '@components/Header'
import { Board as SchBoard } from '@components/schBoard/Board'
import { WriteBtn } from '@components/schBoard/WriteBtn'
import { Link } from 'react-router-dom'
import axiosInstance from '@apis/axiosInstance'

export const LionBoardPage = () => {
    
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try{
            const response = await axiosInstance.get('/post/mainboard');
            console.log('API response:', response.data);
            console.log('댓글:', response.data.comments_count)
            console.log('유저고유아이디:', response.data.writer)
            setPosts(Array.isArray(response.data) ? response.data : [response.data]);
        } catch(error) {
            console.log('error:',error)
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])


    return (
        <S.Wrapper>
            <Header title="아기사자 게시판"/>
            <S.Content>
                {posts.filter(post => post.board_title === '아기사자게시판').map((post, index) => (
                    <S.Back>
                        <SchBoard 
                            id={index}
                            title={post.title}
                            body={post.body}
                            time={post.time}
                            anonymous={post.anonymous}
                            writer={post.writer}
                            comments_count={post.comments_count}
                            scraps_count={post.scraps_count}
                        />                        
                    </S.Back>
                ))}
            </S.Content>
            <Link to='/LionPostingPage'>
                <WriteBtn />
            </Link>
        </S.Wrapper>
    )
}

export default LionBoardPage
