// 커뮤니티 메인 페이지
import * as S from './CommuMainPage.styled'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { Link } from 'react-router-dom'

export const CommuMainPage = () => {
    return (
        <S.Wrapper>
            <Header title='커뮤니티'/>
            <S.Content>
                <S.Title>게시판</S.Title>
                <S.Posts>
                    <S.Post>
                        <S.Top>
                            <S.Name>💬 자유 게시판</S.Name>
                            <Link to='/defaultBoard'>
                                <S.More>더보기</S.More>
                            </Link>
                        </S.Top>
                        <S.Context>🌍지구🌍를 사랑하고 보호하고 싶다면, 우리 팀 지구 지킴이 지지...</S.Context>
                    </S.Post>
                    <S.Post>
                        <S.Top>
                            <S.Name>🚥 프론트엔드 게시판</S.Name>
                            <Link to='/feBoard'>
                                <S.More>더보기</S.More>
                            </Link>
                        </S.Top>
                        <S.Context>🌍지구🌍를 사랑하고 보호하고 싶다면, 우리 팀 지구 지킴이 지지...</S.Context>
                    </S.Post>
                    <S.Post>
                        <S.Top>
                            <S.Name>🚥 백엔드 게시판</S.Name>
                            <Link to='/beBoard'>
                                <S.More>더보기</S.More>
                            </Link>
                        </S.Top>
                        <S.Context>🌍지구🌍를 사랑하고 보호하고 싶다면, 우리 팀 지구 지킴이 지지...</S.Context>
                    </S.Post>
                    <S.Post>
                        <S.Top>
                            <S.Name>🚥 기획/디자인 게시판</S.Name>
                            <Link to='/pmBoard'>
                                <S.More>더보기</S.More>
                            </Link>
                        </S.Top>
                        <S.Context>🌍지구🌍를 사랑하고 보호하고 싶다면, 우리 팀 지구 지킴이 지지...</S.Context>
                    </S.Post>
                    <S.Post>
                        <S.Top>
                            <S.Name>🦁 아기사자 게시판</S.Name>
                            <Link to='/lionBoard'>
                                <S.More>더보기</S.More>
                            </Link>
                        </S.Top>
                        <S.Context>🌍지구🌍를 사랑하고 보호하고 싶다면, 우리 팀 지구 지킴이 지지...</S.Context>
                    </S.Post>
                    <S.Post>
                        <S.Top>
                            <S.Name>📢 이벤트/공지 게시판</S.Name>
                            <Link to='/notiBoard'>
                                <S.More>더보기</S.More>
                            </Link>
                        </S.Top>
                        <S.Context>🌍지구🌍를 사랑하고 보호하고 싶다면, 우리 팀 지구 지킴이 지지...</S.Context>
                    </S.Post>
                    <S.Post>
                        <S.Top>
                            <S.Name>✋ 참여 게시판</S.Name>
                            <Link to='/joinBoard'>
                                <S.More>더보기</S.More>
                            </Link>
                        </S.Top>
                        <S.Context>🌍지구🌍를 사랑하고 보호하고 싶다면, 우리 팀 지구 지킴이 지지...</S.Context>
                    </S.Post>
                </S.Posts>
            </S.Content>
            <Footer />
        </S.Wrapper>
    )
}

export default CommuMainPage
