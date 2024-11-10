// 게시판을 메인화면에서 보여줄 때 사용

import styled from "styled-components";
import {BoardPost} from './BoardPost';
export const Board = ({title, posts}) => {

    return (
        <Wrapper>
            <Top>
                <Title>{title}</Title>
                <More>더보기</More>
            </Top>
            <Posts>
                {posts.map((post, index) => (
                    <BoardPost key={index} {...post}/>
                ))}
            </Posts>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    border: 2px solid #D9D9D9;
    background-color: #fff;
    border-radius: 10px;
    padding: 15px 20px;
    display: flex;
    flex-direction: column;

`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 9px;
`;

const Title = styled.h2`
    font-size: 15px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
`;

const More = styled.p`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    color: #7C7C82;
    font-size: 13px;
    cursor: pointer;
`;

const Posts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
`;