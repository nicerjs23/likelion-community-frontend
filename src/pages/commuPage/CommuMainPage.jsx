// 커뮤니티 메인 페이지
import * as S from './CommuMainPage.styled'
import { MainHeader } from '@components/MainHeader'
import { Footer } from '@components/Footer'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axiosInstance from '@apis/axiosInstance'

export const CommuMainPage = () => {
    const [posts, setPosts] = useState([]);

    // 게시판마다 가장 최근에 작성된 글을 가져온다
    const fetchLatestPosts = async () => {
        try{
            const response = await axiosInstance.get('/post/latest-main-board/');
            console.log('최근 게시글 :', response.data);
            setPosts(Array.isArray(response.data) ? response.data : [response.data]);
        } catch(error) {
            console.log('최근 게시글 에러 :',error)
        }
    }

    useEffect(() => {
        fetchLatestPosts();
    }, [])

    const getLink = (boardTitle) => {
        switch(boardTitle) {
            case "자유게시판":
                return "defaultBoard";
            case "프론트엔드 게시판":
                return "feBoard";
            case "백엔드 게시판":
                return "beBoard";
            case "기획/디자인 게시판":
                return "pmBoard";
            case "아기사자게시판":
                return "lionBoard";
            case "이벤트/공지 게시판":
                return "notiBoard";
            case "참여게시판":
                return "joinBoard";
            default:
                return "defaultBoard";
        }
    }

    const getBoardTitle = (boardTitle) => {
        switch(boardTitle) {
            case "자유게시판":
                return "💬 자유게시판";
            case "프론트엔드 게시판":
                return "🚥 프론트엔드 게시판";
            case "백엔드 게시판":
                return "🚥 백엔드 게시판";
            case "기획/디자인 게시판":
                return "🚥 기획/디자인 게시판";
            case "아기사자게시판":
                return "🦁 아기사자게시판";
            case "이벤트/공지 게시판":
                return "📢 이벤트/공지게시판";
            case "참여게시판":
                return "✋ 참여게시판";
            default:
                return "💬 자유게시판";
        }
    }

    // 이벤트 공지 게시판의 가장 최신 게시글
    const [noti, setNoti] = useState('');
    const fetchLatestNoti = async () => {
        try{
            const response = await axiosInstance.get('/post/latest-main-notice/');
            console.log('최근 게시글 :', response.data);
            setNoti(response.data);
        } catch(error) {
            console.log('최근 게시글 에러 :',error)
        }
    }

    useEffect(() => {
        fetchLatestNoti();
    }, [])

    return (
        <S.Wrapper>
            <MainHeader title='EVERION'/>
            <S.Content>
                <S.Title>게시판</S.Title>
                <S.Posts>
                    <>
                    {posts.map((post, id) => {
                        return(
                        <S.Post>
                            <S.Top>
                                <S.Name>{getBoardTitle(post.board_title)}</S.Name>
                                <Link to={`/${getLink(post.board_title)}`}>
                                    <S.More>더보기</S.More>
                                </Link>
                            </S.Top>
                            <S.Context>{post.body}</S.Context>
                        </S.Post>)
                    })}
                    </>
                    <S.Post>
                        <S.Top>
                            <S.Name>📢 이벤트/공지게시판</S.Name>
                            <Link to={`/notiBoard`}>
                                <S.More>더보기</S.More>
                            </Link>
                        </S.Top>
                        <S.Context>{noti.body}</S.Context>
                    </S.Post>
                </S.Posts>
            </S.Content>
            <Footer />
        </S.Wrapper>
    )
}

export default CommuMainPage
