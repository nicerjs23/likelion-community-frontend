// 아기사자 출석 정보 확인 페이지
import { useState } from "react";
import { Header } from "@components/Header";
import * as S from './LionAttInfoPage.styled';
import list from '@assets/icons/list.svg';
import date from '@assets/icons/date.svg';
import location from '@assets/icons/location.svg';
import image from '@assets/icons/image.svg';

export const LionAttInfoPage = () => {

    const [btn, setBtn] = useState(true);
    const attInfo = {
        state:'출석',
        isBtn:btn
    }

    const attBackColor = (state) => {
        return state === '출석' ? { backgroundColor: 'rgba(162, 255, 154, 0.50)'}:
        state === '지각' ? { backgroundColor: 'rgba(255, 243, 154, 0.50)'}:
        state === '결석' ? { backgroundColor: 'rgba(255, 154, 154, 0.50)'}:{}
    }

    return (
        <S.Wrapper>
            <Header title="출석 정보"/>
            <S.Content>
                <S.Session>
                    <S.Top>
                        <S.TopImg src={ list }/>
                    </S.Top>
                    <S.Mid>
                        <S.Date>
                            <S.DateImg src={ date }/>
                            2024년 10월 19일 18:30
                        </S.Date>
                        <S.Location>
                            <S.LocationImg src={ location }/>
                            신공학관 5147
                        </S.Location>
                        <S.Title>[백엔드] 9주차 세션 배포 쉽게하기</S.Title>
                        <S.Detail>늦지 않게 와주세요~ 일찍 오신분들은 5143에서 대기해주시면 됩니다.</S.Detail>
                        <S.FileDiv>
                            <S.FileName>9주차 배포자료.pdf</S.FileName>
                            <img src={ image } alt="filen name" />
                        </S.FileDiv>
                    </S.Mid>
                </S.Session>
                <S.State>
                    <S.Attend style={attBackColor(attInfo.state === '출석' ? '출석':'')}>
                        <S.StateName>출석</S.StateName>
                        <S.Number>3회</S.Number>
                    </S.Attend>
                    <S.Late style={attBackColor(attInfo.state === '지각' ? '지각':'')}>
                        <S.StateName>지각</S.StateName>
                        <S.Number>2회</S.Number>
                    </S.Late>
                    <S.Absent style={attBackColor(attInfo.state === '결석' ? '결석':'')}>
                        <S.StateName>결석</S.StateName>
                        <S.Number>1회</S.Number>
                    </S.Absent>
                </S.State>
                <S.Out>벌점이 15점 이상이거나 무단결석이 3회 이상일 경우 제명됩니다</S.Out>
                <S.Btn isActive={btn}>출석하러 가기</S.Btn>
            </S.Content>
        </S.Wrapper>
    )
}

export default LionAttInfoPage;