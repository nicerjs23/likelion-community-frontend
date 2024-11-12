import React, { useState, useEffect } from 'react'
import * as S from './MyPage.styled'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import myPost from '@assets/icons/myPost.svg'
import myComment from '@assets/icons/myComment.svg'
import myScrap from '@assets/icons/myScrap.svg'
import upload from '@assets/icons/upload.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const MyPage = () => {

    const [name, setName] = useState('김멋사'); // 이름 임의로 넣었습니다
    const [schoolVerified, setSchoolVerified] =useState('pending');

    const schoolUpdate = (e) => {
        setSchoolVerified(true);
    }

    const getName = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}`, {
                headers: {
                    'Authorization':`Token ${token}`,
                },
            })
            console.log("user Response", response.data);
            if (response.data.name) {
                setName(response.data.name)
            } else {
                console.log("사용자 이름 데이터 존재하지 않음")
            }
        } catch(e) {
            console.error("errer",e);
        }
    }

    useEffect(() => {
        getName();
    },[])

    return (
        <S.Wrapper>
            <Header title="마이페이지" />
            <S.Info>
                <S.Left>
                    <S.Top>
                        <S.Title>내 정보</S.Title>
                        <S.Edit>수정</S.Edit>
                    </S.Top>
                    <S.Mid>
                        <S.Name>{name}</S.Name>
                        <S.Badge>12기</S.Badge>
                        <S.Badge>아기사자</S.Badge>
                    </S.Mid>
                    <S.Bottom>likelion@example.com</S.Bottom>
                </S.Left>
                <S.Img src='' alt="profile img"/>
            </S.Info>
            <S.School>
                {schoolVerified == 'approved'?(
                    <S.SchoolName>
                        내 학교
                        <S.SchoolBadge>멋사대학교</S.SchoolBadge>
                    </S.SchoolName>
                    
                ):schoolVerified == 'pending'?
                <>
                    <S.SchoolName>내 학교</S.SchoolName>
                    <S.SchoolVerify>
                        <S.Guide>
                            처리가 진행 중입니다
                        </S.Guide>
                    </S.SchoolVerify>
                </>:schoolVerified == 'rejected'?
                <>
                    <S.SchoolName>내 학교</S.SchoolName>
                    <S.SchoolVerify>
                        <S.Guide>
                            인증이 거부되었습니다
                        </S.Guide>
                    </S.SchoolVerify>
                </>
                :
                <>
                    <S.SchoolName>내 학교</S.SchoolName>
                    <S.SchoolVerify>
                        <S.Guide>
                            학교와 직위를 인증할 수 있는 서류 첨부해주세요!
                            <S.UploadIcon src={ upload } alt="" />
                        </S.Guide>
                    </S.SchoolVerify>
                </>
                }
                
            </S.School>
            <S.Mypost>
                <S.Post>
                    <S.PostImg src={myPost}/>
                    <Link to='/myPost'><S.MypostTitle>내가 쓴 글</S.MypostTitle></Link>
                </S.Post>
                <S.Comment>
                    <S.PostImg src={myComment}/>
                    <Link to='/myComment'><S.MypostTitle>댓글 단 글</S.MypostTitle></Link>
                </S.Comment>
                <S.Scrap>
                    <S.PostImg src={myScrap}/>
                    <Link to='/myScrap'><S.MypostTitle>스크랩</S.MypostTitle></Link>
                </S.Scrap>
            </S.Mypost>
            <S.User>
                <S.Btn>로그아웃</S.Btn>
                <S.Btn>회원탈퇴</S.Btn>
            </S.User>
            <Footer />
        </S.Wrapper>
    )
}

export default MyPage
