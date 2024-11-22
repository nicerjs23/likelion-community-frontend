// 프론트엔드 게시판
import React, { useState, useEffect } from 'react'
import * as S from './BoardPage.styled'
import { Header } from '@components/Header'
import { Board as SchBoard } from '@components/schBoard/Board'
import { WriteBtn } from '@components/schBoard/WriteBtn'
import { Link } from 'react-router-dom'
import axiosInstance from '@apis/axiosInstance'

export const FeBoardPage = () => {
    
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try{
            const response = await axiosInstance.get('/post/mainboard');
            console.log('API response:', response.data);
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
            <Header title="프론트엔드 게시판"/>
            <S.Content>
                {posts.filter(post => post.board_title === '프론트엔드 게시판').map((post, id) => (
                    <Link to={`/fePostPage/${post.id}`} style={{"width":"100%"}}>
                        <S.Back>
                            <SchBoard 
                                id={post.id}
                                title={post.title}
                                body={post.body}
                                time={post.time}
                                anonymous={post.anonymous}
                                writer={post.writer.nickname}
                                comments_count={post.comments_count}
                                scraps_count={post.scraps_count}
                                images={post.images}
                            />                        
                        </S.Back>
                    </Link>
                ))}
            </S.Content>
            <Link to='/FePostingPage'>
                <WriteBtn />
            </Link>
        </S.Wrapper>
    )
}

export default FeBoardPage
