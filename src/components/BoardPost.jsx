// 미리보기로 메인 화면에서 게시판을 보여줄 때, 게시판 안에 들어갈 게시글
import styled from "styled-components";
export const BoardPost = ({time, user, content}) => {

    const getTime = (time) => {
		const date=new Date(time);
		const now = new Date();
		const elapseTime = Math.floor((now - date) / (1000 * 60));

        if (elapseTime < 0) return `0분 전`;
		if (elapseTime < 60) return `${elapseTime}분 전`;
		if (elapseTime < 1440) return `${Math.floor(elapseTime / 60)}시간 전`;
		return `${Math.floor(elapseTime / 1440)}일 전`;
	}

    const elapseTime = getTime(time);
    
    return (
        <Wrapper>
            <Top>{elapseTime} | {user}</Top>
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
    theme.fonts.PretendardMedium["font-family"]};
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`;