// 미리보기로 메인 화면에서 게시판을 보여줄 때, 게시판 안에 들어갈 게시글
import styled from "styled-components";
export const BoardPost = ({time, user, content}) => {

    return (
        <Wrapper>
            <Top>{time}분 전 | {user}</Top>
            <Content>{content}</Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #EFEFEF;
    border-radius: 10px;
    width: 100%;
    padding: 9px 15px;

`;

const Top = styled.p`
    display: flex;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardRegular["font-family"]};
    font-size: 10px;
    margin-bottom: 12px;
`;

const Content = styled.div`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`;